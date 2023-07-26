import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveysComponent } from './surveys/surveys.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { TakeComponent } from './surveys/take/take.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';
import { SurveySiteComponent } from './survey-site/survey-site.component';

const routes: Routes = [
  { path: 'home', component: SurveysComponent, data: {title: 'Recent Surveys'}},
  { path: '', component: SurveysComponent, data: {title: 'Recent Surveys'}},
  { path: 'surveys', component: SurveysComponent, data: { title: 'Survey' } },
  { path: 'survey/:id', component: TakeComponent, data: {title: 'Take Survey'}},
  { path: 'error', component: ErrorComponent, data: {title: 'Error'}},
  { path: 'survey-site', component: SurveySiteComponent, data: {title: 'Survey Site'}},
  { path: 'create-survey', component: CreateComponent, data: {title: 'Create Survey'}},
  { path: 'my-survey', component: MysurveysComponent, data: {title: 'My Survey'}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
