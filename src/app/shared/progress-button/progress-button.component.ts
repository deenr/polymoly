import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.scss'],
  imports: [CommonModule]
})
export class ProgressButtonComponent {
  @Input() inProgress = false;
  @Input() buttonText: string;

  getButtonText(): string {
    return this.buttonText;
  }
}
