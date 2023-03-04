import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-poly-card',
  templateUrl: './poly-card.component.html',
  styleUrls: ['./poly-card.component.scss'],
})
export class PolyCardComponent {
  @Input() cardFlipped: boolean;
  @Input() rotateX: number;
  @Input() rotateY: number;
}
