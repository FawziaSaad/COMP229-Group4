import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';
import { SurveySiteComponent } from './survey-site/survey-site.component';
import { TakeSurveyComponent } from './pages/survey/survey.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Recent Surveys'}},
  { path: '', component: HomeComponent, data: {title: 'Recent Surveys'}},
  { path: 'error', component: ErrorComponent, data: {title: 'Error'}},
  { path: 'survey-site', component: SurveySiteComponent, data: {title: 'Survey Site'}},
  { path: 'create-survey', component: CreateComponent, data: {title: 'Create Survey'}},
  { path: 'survey/mysurveys', component: MysurveysComponent, data: {title: 'My Surveys'}},
  { path: 'survey/:id', component: TakeSurveyComponent, data: {title: 'Take Survey'}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
