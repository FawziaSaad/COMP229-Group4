import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey.model';
import { Response } from '../model/response.model';
import { Question } from '../model/question.model';
import { SurveyRepository } from '../model/survey.repository';

@Component({
  selector: 'app-survey-site',
  templateUrl: './survey-site.component.html',
  styleUrls: ['./survey-site.component.css'],

})
export class SurveySiteComponent implements OnInit {
  public selectedSurvey: Survey = null;
  public selectedQuestion: Question = null;
  public selectedResponse: Response = null;
  public selectedCreator: string = null;
  public surveyesPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: SurveyRepository) {}
  

  ngOnInit(): void {}
  get surveys(): Survey[] {
    const pageIndex = (this.selectedPage - 1) * this.surveyesPerPage;
    return this.repository.getSurveys(this.selectedUser)
    .slice(pageIndex, pageIndex + this.surveyesPerPage);
  }

  public getCreators(): string[] {
    return this.repository.getCreators(); }


  get responses(): Response[] {
    return this.repository.getResponses();
    }

  get questions(): Question[] {
    return this.repository.getQuestions();
    }

  selectedUser: string = null;

  setUserFilter(user: string) {
    this.selectedUser = user;
  }

  changePage(newPage: number) : void {
    this.selectedPage = newPage;

  }
  changepagesize(newSize: number): void {
    this.surveyesPerPage = Number(newSize);
    this.changePage(1);
  }

  // get pageNumbers (): number {
  //   return Math.ceil(this.repository.getSurveys(this.selectedUser).length / this.surveyesPerPage);
  //   // return Array(Math.ceil(this.repository.getSurveys(this.selectedUser).length / this.surveyesPerPage)).fill(0).map((x, i) => i + 1);
  // }
  
  get pageCount(): number {
    return Math.ceil(this.repository.getSurveys(this.selectedUser).length / this.surveyesPerPage);
  }
}
