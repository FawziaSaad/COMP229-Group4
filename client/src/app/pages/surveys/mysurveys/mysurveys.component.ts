import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { Survey } from 'src/app/model/survey.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MysurveysComponent implements OnInit {
  currentSurvey = null; 
  displayName: string = '';
  title: string = 'My Surveys';
  mySurveys: Survey[] = []; // Changed property name to mySurveys

  constructor(private repository: SurveyRepository, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const surveyId = params.get('id');
      this.deleteSurvey(surveyId);
    });
  }

  get surveys(): Survey[] {

    const id: string = 	"64b04fdc4038f37b48c37ce7";
    return this.repository.getSurveys().filter((survey) => survey.userid === id);
  }
  deleteSurvey(surveyId: string): void {
    this.repository.deleteSurvey(surveyId);
   }
}
