import { NgModule } from "@angular/core";
import { SurveyRepository } from "./survey.repository";
import { ReportRepository } from "./report.repository";
import { StaticDataSource } from "./static.datasource";
import { HttpClientModule } from "@angular/common/http";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [SurveyRepository,ReportRepository, StaticDataSource, RestDataSource,
        {provide: StaticDataSource, useClass: RestDataSource}, AuthService]
})
export class ModelModules {}
