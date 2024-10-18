import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { from, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY, {});
  }

  public getCards(explicit: boolean): Observable<Array<{ id: string; title: string; description: string }>> {
    return from(this.supabase.from('cards').select('id, title, description').eq('explicit_content', explicit)).pipe(
      map(({ data, error }) => {
        if (error) throw error;
        return data as Array<{ id: string; title: string; description: string }>;
      }),
      catchError((error) => {
        console.error('Error fetching normal cards:', error);
        return of([]);
      })
    );
  }

  public addCard({ title, description, explicitContent }: { title: string; description: string; explicitContent: boolean }): Observable<{ id: string; title: string; description: string }> {
    return from(
      this.supabase
        .from('cards')
        .upsert({
          title,
          description,
          explicit_content: explicitContent
        })
        .select('id, title, description')
        .single()
    ).pipe(
      map(({ data, error }) => {
        if (error) {
          throw error;
        }
        if (!data) {
          throw new Error('No data returned from insert operation');
        }
        return { ...data };
      })
    );
  }
}
