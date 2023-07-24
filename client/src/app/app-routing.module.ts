import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SurveysComponent } from './surveys/surveys.component';
import { CreateComponent } from './surveys/create/create.component';
import { TakeComponent } from './surveys/take/take.component';

const routes: Routes = [
  { path: 'surveys', component: SurveysComponent, data: { title: 'All Surveys' } },
  { path: 'survey/:id', component: TakeComponent, data: { title: 'Take Survey' } },
  { path: 'create', component: CreateComponent, data: { title: 'Create Survey' } },
 {path: '', redirectTo: '/surveys', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
