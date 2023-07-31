// survey-take.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class TakeSurveyComponent implements OnInit {
  surveyToTake: Survey;
  selectedAnswers: any[] = [];

  constructor(
    private surveyRepository: SurveyRepository,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const surveyId = params.get('id');
      this.loadSurvey(surveyId);
    });
  }

  loadSurvey(surveyId: string) {
    this.surveyToTake = this.surveyRepository.getSurveyById(surveyId);
    this.initializeAnswers();
  }

  initializeAnswers() {
    if (this.surveyToTake) {
      this.selectedAnswers = new Array(this.surveyToTake.questions.length).fill('');
    }
  }

  submitSurvey() {
    // Handle the form submission logic here, using the selectedAnswers array.
    console.log(this.selectedAnswers);
  }
}
