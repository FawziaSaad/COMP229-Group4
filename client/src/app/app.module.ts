import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SurveySiteModule} from './survey-site/survey-site.module';
import { PagesModule } from './pages/pages.module';
import { RestDataSource } from './model/rest.datasource';
import { CounterDirective } from './survey-site/counter.directive';


@NgModule({
  declarations: [
    AppComponent,
    CounterDirective,
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
  providers: [RestDataSource],
  bootstrap: [AppComponent]
})
export class AppModule { }
