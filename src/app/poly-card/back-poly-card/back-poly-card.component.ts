import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-back-poly-card',
  templateUrl: './back-poly-card.component.html',
  styleUrls: ['./back-poly-card.component.scss']
})
export class BackPolyCardComponent {
  @Input() cardTitle: string;
  @Input() cardDescription: string;
}
