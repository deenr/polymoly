import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { PolyCardComponent } from './poly-card/poly-card.component';
import { ProgressButtonComponent } from './progress-button/progress-button.component';
import { DrawCardComponent } from './draw-card/draw-card.component';

@NgModule({
  declarations: [AppComponent, PolyCardComponent, ProgressButtonComponent, DrawCardComponent],
  imports: [BrowserModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
