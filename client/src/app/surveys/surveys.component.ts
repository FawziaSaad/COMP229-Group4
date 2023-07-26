import { Component, OnInit } from '@angular/core';
import { Survey } from '../model/survey.model';
import { Response } from '../model/response.model';
import { Question } from '../model/question.model';
import { SurveyRepository } from '../model/survey.repository';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  // surveys: any = [];
  

  constructor(private repository: SurveyRepository) { }

  ngOnInit(): void {
    // this.http.get('http://localhost:3000').subscribe((response) => {
    //   this.surveys = response;
    // })
    
  }
  get surveys(): Survey[] {
     console.log(this.repository.getSurveys());
    return this.repository.getSurveys();
  }
  
}
