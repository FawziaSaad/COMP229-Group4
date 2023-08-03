import { NgModule } from "@angular/core";
import { SurveyRepository } from "./survey.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { ResponseRepository } from "./response.repository";

@NgModule({
    imports: [HttpClientModule],
    providers: [SurveyRepository, StaticDataSource, ResponseRepository
        // {provide: StaticDataSource, useClass: RestDataSource}]
    ]
})
export class ModelModules {}
