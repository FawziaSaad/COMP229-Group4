import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../../partials/base-page/base-page.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/app/model/survey.model';
import { Response } from 'src/app/model/response.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { ReportRepository } from 'src/app/model/report.repository';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent implements OnInit{
  id: any =  this.route.snapshot.paramMap.get('id');
  surveyToTake: Survey;
  constructor(private repository: SurveyRepository, private rpRepository: ReportRepository,private route: ActivatedRoute, private http: HttpClient){
  }

  ngOnInit(): void {
  }

  get survey(): Survey {
    return this.repository.getSurveyById(this.id);
  }

  get response(): Response[] {
    return this.rpRepository.getResponsesById(this.id)
  }
}
