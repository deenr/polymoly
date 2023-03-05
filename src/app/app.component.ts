import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
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
