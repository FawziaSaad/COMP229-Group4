import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Question } from './question.model';
import { User } from './user.model';
import { Response } from './response.model';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class SurveyRepository {
  [x: string]: any;
  private surveys: Survey[] = [];
  private creators: string[] = [];
  private questions: Question[] = [];
  private responses: Response[] = [];
  private foundSurvey: Survey;

  constructor(private dataSource: RestDataSource) {
    this.dataSource.getSurveylist().subscribe((data) => {
      this.surveys = data['SurveyList'];
      this.creators = data['SurveyList']
        .map((s) => s.creator)
        .filter((c, index, array) => array.indexOf(c) === index)
        .sort();
    });
  }

  getSurveys(creator: string = null): Survey[] {
    return this.surveys.filter((s) => creator == null || creator === s.creator);
  }

  getSurveyById(id: string): Survey {
    this.foundSurvey = this.surveys.find((s) => s._id === id);
    return this.surveys.find((s) => s._id === id);
  }

  getCreators(): string[] {
    return this.creators;
  }
  getQuestions(): Question[] {
    return this.questions;
  }
  getResponses(surveyId?: string): Response[] {
    if(surveyId) {
        return this.responses.filter((r) => r.surveyId === surveyId);
    }
    return this.responses;
}

getEditableSurvey(id: string): Observable<Survey> {
  return this.dataSource.getSurveyToEdit(id) ;
}
saveSurvey(survey: Survey): void {
  this.dataSource.updateSurvey(survey._id, survey).subscribe(response => {
  });
}

}
