import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Home'}},
  { path: '', component: HomeComponent, data: {title: 'Home'}},
  { path: 'survey', component: SurveyComponent, data: {title: 'Survey'}},
  { path: 'error', component: ErrorComponent, data: {title: 'Error'}},
  { path: 'create-survey', component: CreateComponent, data: {title: 'Create Survey'}},
  { path: 'my-survey', component: MysurveysComponent, data: {title: 'My Survey'}}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
