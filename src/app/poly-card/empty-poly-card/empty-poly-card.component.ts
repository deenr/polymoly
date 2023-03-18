import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-poly-card',
  templateUrl: './empty-poly-card.component.html',
  styleUrls: ['./empty-poly-card.component.scss'],
})
export class EmptyPolyCardComponent {
  @Input() isLoading: boolean;
}
