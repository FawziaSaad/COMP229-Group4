import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Response } from './response.model';
// import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class ReportRepository {
  private responses: Response[] = [];

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getResponseList().subscribe((data) => {
      this.responses = data['responses'];
    });
    // dataSource.getQuestions().subscribe((data) => {
    //   this.questions = data;
    // });
    // dataSource.getResponses().subscribe((data) => {
    //   this.responses = data;
    // });
  }

    getResponsesById(surveyId?: string): Response[] {
    return this.responses.filter((r) => r.surveyId === surveyId);
        }
    
    getResponses(): Response[] {
        return this.responses;  
    }

 
}
