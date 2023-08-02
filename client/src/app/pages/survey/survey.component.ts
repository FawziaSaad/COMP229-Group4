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
  MCQoptions : number[] = new Array(4);


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
    console.log(surveyId);
    this.surveyToTake = this.surveyRepository.getSurveyById(surveyId);
  }

  submitSurvey(){
    // What happens when we submit
  }


}


