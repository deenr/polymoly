import { Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-poly-card',
  templateUrl: './poly-card.component.html',
  styleUrls: ['./poly-card.component.scss']
})
export class PolyCardComponent implements OnInit, OnDestroy {
  @ViewChild('card') card: ElementRef;
  @Input() requestCard: Observable<void>;
  @Input() movableCard: boolean = false;
  @Output() isCardLoadingChange = new EventEmitter<boolean>();
  @Output() isCardFlippedChange = new EventEmitter<boolean>();

  cardTitles = ['You are lucky', 'You are unlucky', 'Hell yeah!', 'Can I do it?'];
  cardDescriptions = [
    'Move to vacation and do your holiday dance!',
    'Go to jail and drop the soap!',
    'You decided to move to New York and throw a big house party. Give the bank $300',
    'Do a handstand and try to take a shot'
  ];
  cardTitle: string;
  cardDescription: string;

  requestCardSubscription: Subscription;
  isLoading = false;
  mouseNotOnCard = false;
  rotateX: number;
  rotateY: number;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.movableCard) {
      this.mouseNotOnCard = false;
      const { left, top } = this.card.nativeElement.getBoundingClientRect();
      this.rotateX = -(this.card.nativeElement.offsetWidth / 2 - (event.pageX - left)) / 20;
      this.rotateY = (this.card.nativeElement.offsetHeight / 2 - (event.pageY - top)) / 10;
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.mouseNotOnCard = true;
    this.rotateX = 0;
    this.rotateY = 0;
  }

  ngOnInit(): void {
    this.requestCardSubscription = this.requestCard.subscribe(() => {
      this.isLoading = true;
      this.isCardLoadingChange.emit(this.isLoading);
      if (this.isCardFlipped()) {
        this.card.nativeElement.classList.toggle('is-flipped');
        this.isCardFlippedChange.emit(false);
      }

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * this.cardTitles.length);
        this.cardTitle = this.cardTitles[randomIndex];
        this.cardDescription = this.cardDescriptions[randomIndex];

        this.card.nativeElement.classList.toggle('is-flipped');
        this.isCardFlippedChange.emit(true);

        setTimeout(() => {
          this.isLoading = false;
          this.isCardLoadingChange.emit(this.isLoading);
        }, 1000);
      }, 3000);
    });
  }

  ngOnDestroy(): void {
    this.requestCardSubscription.unsubscribe();
  }

  isCardFlipped(): boolean {
    return this.card?.nativeElement?.classList.contains('is-flipped');
  }
}
