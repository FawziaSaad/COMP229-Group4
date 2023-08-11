import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { PartialsModule } from '../partials/partials.module';
import { MysurveysComponent } from './surveys/mysurveys/mysurveys.component';
import { LandingComponent } from './surveys/landing/landing.component';
import { EditComponent } from './surveys/edit/edit.component';
import { CreateComponent } from './surveys/create/create.component';
import { ReportComponent } from './surveys/report/report.component';
import { RouterModule } from '@angular/router';
import { TakeSurveyComponent } from './survey/survey.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule, RouterModule],
  declarations: [
    HomeComponent,
    MysurveysComponent,
    LandingComponent,
    EditComponent,
    CreateComponent,
    ReportComponent,
    TakeSurveyComponent,
    RegisterComponent

  ],
  exports: [
    HomeComponent,
    PartialsModule,
    MysurveysComponent,
    LandingComponent,
    EditComponent,
    CreateComponent,
    ReportComponent,
    TakeSurveyComponent,
    RegisterComponent

    ]
})
export class PagesModule {}
