import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodycompoComponent } from './bodycompo/bodycompo.component';
import { CardcompoComponent } from './cardcompo/cardcompo.component';
import { DashboardcompoComponent } from './dashboardcompo/dashboardcompo.component';

const routes: Routes = [
{path: 'cardcompo', component: CardcompoComponent},
{path: 'bodycompo',  component: BodycompoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  = [BodycompoComponent, CardcompoComponent];
