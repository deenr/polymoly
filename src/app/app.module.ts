import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PolyCardComponent } from './poly-card/poly-card.component';
import { ProgressButtonComponent } from './progress-button/progress-button.component';
import { DrawCardComponent } from './draw-card/draw-card.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurvedTextComponent } from './curved-text/curved-text.component';
import { FrontPolyCardComponent } from './poly-card/front-poly-card/front-poly-card.component';
import { BackPolyCardComponent } from './poly-card/back-poly-card/back-poly-card.component';
import { EmptyPolyCardComponent } from './poly-card/empty-poly-card/empty-poly-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PolyCardComponent,
    ProgressButtonComponent,
    DrawCardComponent,
    HomeComponent,
    CurvedTextComponent,
    FrontPolyCardComponent,
    BackPolyCardComponent,
    EmptyPolyCardComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
