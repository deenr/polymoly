import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  requestNewCard = new Subject<void>();

  requestCard(): void {
    this.requestNewCard.next();
  }

  getRequestCard(): Observable<void> {
    return this.requestNewCard.asObservable();
  }
}
