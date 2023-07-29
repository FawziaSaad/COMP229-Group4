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
import { SurveyComponent } from './survey/survey.component';



@NgModule({
  imports: [BrowserModule, FormsModule, PartialsModule],
  declarations: [
    HomeComponent,
    MysurveysComponent,
    LandingComponent,
    EditComponent,
    CreateComponent,
    ReportComponent,
    SurveyComponent

  ],
  exports: [
    HomeComponent,
    PartialsModule,
    MysurveysComponent,
    LandingComponent,
    EditComponent,
    CreateComponent,
    ReportComponent,
    SurveyComponent
    ]
})
export class PagesModule {}
