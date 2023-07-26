import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SurveysComponent } from './surveys.component';
import { CreateComponent } from './create/create.component';
import { TakeComponent } from './take/take.component';
import { ModelModules } from "../model/model.module";

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModules],
  declarations: [
      SurveysComponent,
      CreateComponent,
        TakeComponent
  ],
  exports: [
      SurveysComponent,
      CreateComponent,
        TakeComponent
    ]
})
export class SurveysModule {}
