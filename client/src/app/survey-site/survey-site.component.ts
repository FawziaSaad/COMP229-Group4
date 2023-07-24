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
  constructor(private repository: SurveyRepository) {}

  ngOnInit(): void {}
  get surveys(): Survey[] {
    return this.repository.getSurveys();
  }

  get responses(): Response[] {
    return this.repository.getResponses();
    }
  get questions(): Question[] {
    return this.repository.getQuestions();
    }
    // get creator(): string {
    //   return this.repository.creator;
    //     }
}
