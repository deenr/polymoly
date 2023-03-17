import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrawCardComponent } from './draw-card/draw-card.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'HomePage' } },
  {
    path: 'play',
    component: DrawCardComponent,
    data: { animation: 'DrawCardPage' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
