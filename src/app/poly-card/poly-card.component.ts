import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-poly-card',
  templateUrl: './poly-card.component.html',
  styleUrls: ['./poly-card.component.scss'],
})
export class PolyCardComponent implements OnInit, OnDestroy {
  @Input() requestCard: Observable<void>;
  @ViewChild('card') card: ElementRef;

  requestCardSubscription: Subscription;
  isLoading = false;
  mouseNotOnCard = false;
  rotateX: number;
  rotateY: number;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseNotOnCard = false;
    const { left, top } = this.card.nativeElement.getBoundingClientRect();
    this.rotateX =
      -(this.card.nativeElement.offsetWidth / 2 - (event.pageX - left)) / 20;
    this.rotateY =
      (this.card.nativeElement.offsetHeight / 2 - (event.pageY - top)) / 10;
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave() {
    this.mouseNotOnCard = true;
    this.rotateX = 0;
    this.rotateY = 0;
  }

  ngOnInit(): void {
    this.requestCardSubscription = this.requestCard.subscribe(() => {
      if (!this.isCardFlipped()) {
        this.isLoading = true;
      }
      setTimeout(() => {
        this.card.nativeElement.classList.toggle('is-flipped');
        setTimeout(() => {
          this.isLoading = false;
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
