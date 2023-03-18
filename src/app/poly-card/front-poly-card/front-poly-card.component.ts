import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-front-poly-card',
  templateUrl: './front-poly-card.component.html',
  styleUrls: ['./front-poly-card.component.scss'],
})
export class FrontPolyCardComponent {
  @Input() isLoading: boolean;
}
