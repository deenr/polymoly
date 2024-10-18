import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-curved-text',
  templateUrl: './curved-text.component.html',
  styleUrls: ['./curved-text.component.scss']
})
export class CurvedTextComponent implements AfterViewInit {
  @ViewChild('line') line: ElementRef;
  @Input() text: string;
  fontSize = 36;

  ngAfterViewInit(): void {
    this.line.nativeElement.setAttribute('d', `M ${0.1 * this.fontSize} ${1.5 * this.fontSize} A ${15 * this.fontSize} ${15 * this.fontSize} 0 0 1 ${7.5 * this.fontSize} ${1.5 * this.fontSize}`);
  }

  calculateHeight(): number {
    return 3 * this.fontSize;
  }

  calculateWidth(): number {
    return 2 * 0.1 * this.fontSize + 7.5 * this.fontSize;
  }
}
