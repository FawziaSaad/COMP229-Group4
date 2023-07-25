import { NgModule } from "@angular/core";
import { SurveyRepository } from "./survey.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [SurveyRepository, StaticDataSource]
})
export class ModelModules {}
