import { Injectable } from '@angular/core';
import { AuthChangeEvent, AuthSession, createClient, Session, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;
  _session: AuthSession | null = null;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  getNormalCards(user: User) {
    return this.supabase.from('card').select('id, title, description').eq('explicit_content', false).select();
  }

  public addCard({ title, description, explicitContent }: { title: string; description: string; explicitContent: boolean }): Observable<string> {
    return new Observable<string>((observer) => {
      this.supabase
        .from('')
        .upsert({
          title,
          description,
          explicit_content: explicitContent
        })
        .then((response) => {
          if (response.error) {
            observer.error(response.error);
          } else {
            observer.next();
            observer.complete();
          }
        });
    });
  }
}
