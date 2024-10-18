import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-poly-card',
  templateUrl: './poly-card.component.html',
  styleUrls: ['./poly-card.component.scss']
})
export class PolyCardComponent {
  @Input() public isFlipped: boolean;
  @Input() public isLoading: boolean;
  @Input() public isExplicit: boolean;
  @Input() public title: string;
  @Input() public description: string;
}
