import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { SurveyComponent } from './pages/survey/survey.component';
import { CreateComponent } from './pages/surveys/create/create.component';
import { EditComponent } from './pages/surveys/edit/edit.component';
import { LandingComponent } from './pages/surveys/landing/landing.component';
import { MysurveysComponent } from './pages/surveys/mysurveys/mysurveys.component';
import { ReportComponent } from './pages/surveys/report/report.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    SurveyComponent,
    CreateComponent,
    EditComponent,
    LandingComponent,
    MysurveysComponent,
    ReportComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
