import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  cardFlipped = false;
  rotateX: number;
  rotateY: number;
  @ViewChild('document') document: ElementRef;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.rotateX =
      -(this.document.nativeElement.offsetWidth / 2 - event.pageX) / 20;
    this.rotateY =
      (this.document.nativeElement.offsetHeight / 2 - event.pageY) / 10;
  }

  flipCard(): void {
    this.cardFlipped = !this.cardFlipped;
  }
}
