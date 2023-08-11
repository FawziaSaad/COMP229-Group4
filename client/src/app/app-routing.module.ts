import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';
import { SurveySiteComponent } from './survey-site/survey-site.component';
import { TakeSurveyComponent } from './pages/survey/survey.component';
///// tim added below line
import { EditComponent } from './pages/surveys/edit/edit.component';
import { ReportComponent } from './pages/surveys/report/report.component';
import { AuthGuard } from './admin/auth/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: {title: 'Recent Surveys'}},
  { path: '', component: HomeComponent, data: {title: 'Recent Surveys'}},
  // { path: 'login', data: {title: 'Login'}, redirectTo: 'survey/mysurveys', pathMatch: 'full'}, 
  { path: 'login', data: {title: 'Login'}, redirectTo: '/admin/auth', pathMatch: 'full'},
  { path: 'error', component: ErrorComponent, data: {title: 'Error'}},
  { path: 'survey-site', component: SurveySiteComponent, data: {title: 'Survey Site'}},
  { path: 'create-survey', component: CreateComponent, data: {title: 'Create Survey'}, canActivate: [AuthGuard]},
  { path: 'survey/mysurveys', component: MysurveysComponent, data: {title: 'My Surveys'}, canActivate: [AuthGuard]},
  { path: 'survey/:id', component: TakeSurveyComponent, data: {title: 'Take Survey'}},
  { path: 'survey/delete/:id', component: MysurveysComponent, canActivate: [AuthGuard]},
  { path: 'survey/report/:id', component: ReportComponent, data: { title: 'Survey Report' }, canActivate: [AuthGuard]},
  ///// tim added below line
  { path: 'survey/edit/:id', component: EditComponent, data: {title: 'Edit Survey'}, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}, // Needs to be here for the logout redirect in header!
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
