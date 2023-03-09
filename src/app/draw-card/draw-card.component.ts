import { Component } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.scss'],
})
export class DrawCardComponent {
  requestNewCard = new Subject<void>();
  isCardLoading = false;
  isCardFlipped = false;

  requestCard(): void {
    this.requestNewCard.next();
  }

  getRequestCard(): Observable<void> {
    return this.requestNewCard.asObservable();
  }

  isCardLoadingChange(isCardLoading: boolean): void {
    this.isCardLoading = isCardLoading;
  }

  isCardFlippedChange(isCardFlipped: boolean): void {
    this.isCardFlipped = isCardFlipped;
  }

  getButtonText(): string {
    return this.isCardFlipped ? 'Play again' : 'Play';
  }
}
