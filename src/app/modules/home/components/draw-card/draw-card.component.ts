import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.scss']
})
export class DrawCardComponent {
  @Output() returnToDeck = new EventEmitter<void>();
  requestNewCard = new Subject<void>();
  isCardLoading = false;
  isCardFlipped = false;

  requestCard(): void {
    console.log('hi');
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

  back(): void {
    this.returnToDeck.emit();
  }
}
