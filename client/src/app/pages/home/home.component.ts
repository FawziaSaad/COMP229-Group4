import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { Question } from 'src/app/model/question.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  public selectedSurvey: Survey = null;
  public selectedQuestion: Question = null;
  public selectedResponse: Response = null;
  public selectedCreator: string = null;
  public surveyesPerPage = 4;
  public selectedPage = 1;

  constructor(private repository: SurveyRepository){

  }
  ngOnInit(): void {}

  get surveys(): Survey[] {
        return this.repository.getSurveys()  
  }

}
