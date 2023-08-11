import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SurveySiteModule} from './survey-site/survey-site.module';
import { PagesModule } from './pages/pages.module';
import { RestDataSource } from './model/rest.datasource';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './admin/auth/auth.guard';


export function jwtTokenGetter(): string
{
  return localStorage.getItem('id_token');
}


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
    PagesModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  providers: [RestDataSource, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
