import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/app/model/survey.model';
import { Response } from 'src/app/model/response.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { ResponseRepository } from 'src/app/model/response.repository';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent extends BasePageComponent implements OnInit{
  id: any = this.route.snapshot.paramMap.get('id');
  responses : Response[];

  constructor(private repository: SurveyRepository, private resrepository: ResponseRepository,  route: ActivatedRoute, private http: HttpClient){
    super(route)
  }

  override ngOnInit(): void {
  }

  get survey(): Survey {

    // const id: string = 	"64b04fdc4038f37b48c37ce7";
    // console.log(this.repository.getSurveyById(this.id));
    return this.repository.getSurveyById(this.id);
  }

  get response(): Response[] {

    // const id: string = 	"64b04fdc4038f37b48c37ce7";
    // const id: string = 	"error";
    this.responses = this.resrepository.getResponsesById(this.id);

    console.log(this.responses);
    

  
    return this.resrepository.getResponsesById(this.id);
  }
}
