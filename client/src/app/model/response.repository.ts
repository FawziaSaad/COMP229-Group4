import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Question } from './question.model';
import { User } from './user.model';
import { Response } from './response.model';
// import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ResponseRepository {
  private surveys: Survey[] = [];
  private creators: string[] = [];
  private questions: Question[] = [];
  private responseList: Response[] = [];
  private responses : Survey;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getResponseList().subscribe((data) => {
      this.responseList = data['ResponseList'];
    });
  }

  getResponsesById(id: string): Response[] {
    // console.log(id);
    // this.responses = this.responseList.filter((s) => s._id === id);
    // console.log(this.foundSurvey);
    return this.responseList.filter((s) => s._id === id);
  }
   

}
