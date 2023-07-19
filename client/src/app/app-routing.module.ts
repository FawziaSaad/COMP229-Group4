import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'survey', component: SurveyComponent},
  { path: 'error', component: ErrorComponent},
  { path: 'create-survey', component: CreateComponent},
  { path: 'my-survey', component: MysurveysComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
