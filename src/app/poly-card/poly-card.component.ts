import {
  Component,
  ElementRef,
  HostListener,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-poly-card',
  templateUrl: './poly-card.component.html',
  styleUrls: ['./poly-card.component.scss'],
})
export class PolyCardComponent {
  @Input() isCardFlipped: boolean;
  @ViewChild('card') card: ElementRef;
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

  ngOnChanges(changes: SimpleChanges) {
    if (
      'isCardFlipped' in changes &&
      !changes['isCardFlipped'].isFirstChange()
    ) {
      this.card.nativeElement.classList.toggle('is-flipped');
    }
  }
}
