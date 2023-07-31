import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { Survey } from 'src/app/model/survey.model';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MysurveysComponent implements OnInit {

  displayName: string = '';
  title: string = 'My Surveys';
  mySurveys: Survey[] = []; // Changed property name to mySurveys

  constructor(private repository: SurveyRepository) {}

  ngOnInit(): void {
    this.loadSurveys();
  }

  loadSurveys() {
    this.mySurveys = this.repository.getSurveys();
  }
}
