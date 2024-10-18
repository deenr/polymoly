import { Injectable } from '@angular/core';
import { GeminiService } from '@core/services/gemini.service';
import { LocalStorageService } from '@core/services/local-storage.service';
import { SupabaseService } from '@core/services/supabase.service';
import { environment } from '@environments/environment';
import { from, Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DrawCardSerice {
  private readonly NORMAL_CARD_PROMPT = environment.NORMAL_CARD_PROMPT;
  private readonly EXPLICIT_CARD_PROMPT = environment.EXPLICIT_CARD_PROMPT;
  private readonly SHOWN_NORMAL_CARDS_KEY = 'shownCardsNormal';
  private readonly SHOWN_EXPLICIT_CARDS_KEY = 'shownCardsExplicit';
  private readonly MAX_REUSE_PROBABILITY = 0.3; // Maximum probability of reusing a card
  private readonly REUSE_PROBABILITY_FACTOR = 0.1; // How quickly the reuse probability increases

  constructor(private readonly localStorageService: LocalStorageService, private readonly geminiService: GeminiService, private readonly supabaseService: SupabaseService) {}

  public requestCard(explicit: boolean): Observable<{ title: string; description: string }> {
    return this.supabaseService.getCards(explicit).pipe(
      switchMap((allCards) => {
        const shownCardIds = JSON.parse(this.localStorageService.getItem(explicit ? this.SHOWN_EXPLICIT_CARDS_KEY : this.SHOWN_NORMAL_CARDS_KEY) || '[]');
        const availableCards = allCards.filter((card) => !shownCardIds.includes(card.id));

        // Calculate the probability of reusing a card
        const reuseProbability = Math.min(this.MAX_REUSE_PROBABILITY, shownCardIds.length * this.REUSE_PROBABILITY_FACTOR);

        if (Math.random() < reuseProbability && shownCardIds.length > 20) {
          // Reuse a previously shown card
          const randomShownCardId: string = shownCardIds[Math.floor(Math.random() * shownCardIds.length)];
          const reusedCard = allCards.find((card) => card.id === randomShownCardId);

          if (reusedCard) {
            return of(reusedCard);
          } else if (availableCards.length > 0) {
            // Use a new card from available cards
            const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
            this.updateShownCards(explicit, randomCard.id);
            return of(randomCard);
          } else {
            // Generate a new card
            return this.generateNewCard(explicit);
          }
        } else if (availableCards.length > 0) {
          // Use a new card from available cards
          const randomCard = availableCards[Math.floor(Math.random() * availableCards.length)];
          this.updateShownCards(explicit, randomCard.id);
          return of(randomCard);
        } else {
          // Generate a new card
          return this.generateNewCard(explicit);
        }
      })
    );
  }

  private generateNewCard(explicit: boolean): Observable<{ title: string; description: string }> {
    return from(this.geminiService.generateText(explicit ? this.EXPLICIT_CARD_PROMPT : this.NORMAL_CARD_PROMPT)).pipe(
      map((response) => response as any as { title: string; description: string }),
      switchMap((generatedCard: { title: string; description: string }) => this.supabaseService.addCard({ ...generatedCard, explicitContent: explicit })),
      tap((newCard) => this.updateShownCards(explicit, newCard.id)),
      map((newCard) => ({ title: newCard.title, description: newCard.description }))
    );
  }

  private updateShownCards(explicit: boolean, cardId: string): void {
    const shownCardIds = JSON.parse(this.localStorageService.getItem(explicit ? this.SHOWN_EXPLICIT_CARDS_KEY : this.SHOWN_NORMAL_CARDS_KEY) || '[]');
    if (!shownCardIds.includes(cardId)) {
      shownCardIds.push(cardId);
      this.localStorageService.setItem(explicit ? this.SHOWN_EXPLICIT_CARDS_KEY : this.SHOWN_NORMAL_CARDS_KEY, JSON.stringify(shownCardIds));
    }
  }
}
