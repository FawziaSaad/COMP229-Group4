import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';
import { SurveySiteComponent } from './survey-site/survey-site.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Recent Surveys'}},
  { path: '', component: HomeComponent, data: {title: 'Recent Surveys'}},
  { path: 'survey', component: SurveyComponent, data: {title: 'Survey'}},
  { path: 'error', component: ErrorComponent, data: {title: 'Error'}},
  { path: 'survey-site', component: SurveySiteComponent, data: {title: 'Survey Site'}},
  { path: 'create-survey', component: CreateComponent, data: {title: 'Create Survey'}},
  // { path: 'my-survey', component: MysurveysComponent, data: {title: 'My Survey'}},
  { path: 'mysurveys', component: MysurveysComponent, data: {title: 'My Surveys'}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
