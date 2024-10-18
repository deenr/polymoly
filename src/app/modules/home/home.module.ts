import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolyCardModule } from '@shared/poly-card/poly-card.module';
import { ProgressButtonComponent } from '@shared/progress-button/progress-button.component';
import { DrawCardComponent } from './components/draw-card/draw-card.component';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [DrawCardComponent, HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PolyCardModule, ProgressButtonComponent]
})
export class HomeModule {}
