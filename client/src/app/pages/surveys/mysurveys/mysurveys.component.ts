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

  ngOnInit(): void {}

  get surveys(): Survey[] {

    // const id: string = 	"64b04fdc4038f37b48c37ce7";
    const id: string = 	"64af8fd980dd9f85a3f7e807";
    return this.repository.getSurveys().filter((survey) => survey.userid === id);
  }
}
