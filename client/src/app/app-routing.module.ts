import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveysComponent } from './surveys/surveys.component';

const routes: Routes = [
 {path: 'surveys', component: SurveysComponent, data: {title: 'All Surveys'}},
 {path: '', redirectTo: '/surveys', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
