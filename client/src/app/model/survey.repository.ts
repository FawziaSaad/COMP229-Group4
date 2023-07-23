import { Injectable } from "@angular/core";
import { Survey } from "./survey.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class SurveyRepository
{
    // private surveys: Survey[] = new Array<Survey>();
    private surveys: Survey[] = [];
    private creators: string[] = [];

    constructor(private dataSource: StaticDataSource)
    {
        dataSource.getSurveys().subscribe(data => {
            this.surveys = data;
            this.creators = data.map(s => s.creator)
                .filter((c, index, array) => array.indexOf(c) === index).sort();
        });
    }

    getSurveys(creator: string = null): Survey[]
    {
        return this.surveys
            .filter(s => creator == null || creator === s.creator);
    }

    getSurvey(id: string): Survey
    {
        return this.surveys.find(s => s._id === id);
    }

    getCreators(): string[]
    {
        return this.creators;
    }
}