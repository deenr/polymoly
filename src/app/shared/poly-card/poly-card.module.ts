import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CurvedTextComponent } from '@shared/curved-text/curved-text.component';
import { BackPolyCardComponent } from './back-poly-card/back-poly-card.component';
import { EmptyPolyCardComponent } from './empty-poly-card/empty-poly-card.component';
import { FrontPolyCardComponent } from './front-poly-card/front-poly-card.component';
import { PolyCardComponent } from './poly-card.component';

@NgModule({
  imports: [CommonModule, CurvedTextComponent],
  declarations: [PolyCardComponent, BackPolyCardComponent, FrontPolyCardComponent, EmptyPolyCardComponent],
  exports: [PolyCardComponent, FrontPolyCardComponent, EmptyPolyCardComponent]
})
export class PolyCardModule {}
