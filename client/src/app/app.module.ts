import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveySiteModule } from './survey-site/survey-site.module';
import { SurveysModule } from './surveys/surveys.module';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { EditComponent } from './pages/surveys/edit/edit.component';
import { LandingComponent } from './pages/surveys/landing/landing.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';
import { ReportComponent } from './pages/surveys/report/report.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { PartialsModule } from './partials/partials.module';
// import { SurveySiteComponent } from './survey-site/survey-site.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    CreateComponent,
    EditComponent,
    LandingComponent,
    MysurveysComponent,
    ReportComponent,
    LoginComponent,
    RegisterComponent,
    // SurveySiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveySiteModule,
    SurveysModule,
    PartialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
