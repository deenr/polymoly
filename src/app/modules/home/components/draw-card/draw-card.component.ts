import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { finalize, Observable, Subject, take } from 'rxjs';
import { DrawCardSerice } from './draw-card.service';

@Component({
  selector: 'app-draw-card',
  templateUrl: './draw-card.component.html',
  styleUrls: ['./draw-card.component.scss']
})
export class DrawCardComponent {
  @Input() public isExplicit: boolean;
  @Output() returnToDeck = new EventEmitter<void>();
  requestNewCard = new Subject<void>();
  isCardLoading = false;
  isCardFlipped = false;

  title = '';
  description = '';

  public constructor(private readonly drawCardService: DrawCardSerice, private readonly changeDetector: ChangeDetectorRef) {}

  public requestCard(): void {
    this.isCardLoading = true;
    this.isCardFlipped = false;

    this.drawCardService
      .requestCard(this.isExplicit)
      .pipe(
        take(1),
        finalize(() => {
          this.isCardLoading = false;
          this.isCardFlipped = true;
        })
      )
      .subscribe(({ title, description }) => {
        this.title = title;
        this.description = description;
      });
  }

  getRequestCard(): Observable<void> {
    return this.requestNewCard.asObservable();
  }

  getButtonText(): string {
    return this.isCardFlipped ? 'Play again' : 'Play';
  }

  back(): void {
    this.returnToDeck.emit();
  }
}
