import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SurveySiteModule} from './survey-site/survey-site.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    // PagesModule,
    // PartialsModule
    // SurveySiteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveySiteModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
