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
  selectedAnswers: any[] = [];
  MCQoptions : number[] = new Array(4);
  id: any = this.route.snapshot.paramMap.get('id');

  constructor(
    private surveyRepository: SurveyRepository,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
   
  }

  get surveyToTake() {
    // this.surveyToTake = this.surveyRepository.getSurveyById(this.id);
    return  this.surveyRepository.getSurveyById(this.id);
  }

  submitSurvey(){
    // What happens when we submit
  }


}
