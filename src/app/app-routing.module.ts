import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodycompoComponent } from './bodycompo/bodycompo.component';
import { CardcompoComponent } from './cardcompo/cardcompo.component';
import { DashboardcompoComponent } from './dashboardcompo/dashboardcompo.component';

const routes: Routes = [
{path: '',  component: BodycompoComponent},
<<<<<<< HEAD
{path: 'cardcompo/:id', component: CardcompoComponent},
=======
{path: 'cardcompo', component: CardcompoComponent},
>>>>>>> 44d7328a8dbbab2c8f90becdfd11e11df97ec21c
{path: 'bodycompo',  component: BodycompoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents  = [BodycompoComponent, CardcompoComponent];
