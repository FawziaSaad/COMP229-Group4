import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Survey } from 'src/app/model/survey.model';
import { Response } from 'src/app/model/response.model';
import { SurveyRepository } from 'src/app/model/survey.repository';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent extends BasePageComponent implements OnInit {
  id: any = this.route.snapshot.paramMap.get('id');
  survey: Survey;
  responses: Response[];

  constructor(private repository: SurveyRepository, route: ActivatedRoute, private http: HttpClient) {
    super(route)
  }

  override ngOnInit(): void {
    this.survey = this.repository.getSurveyById(this.id);
    this.getResponses();
  }

  private getResponses(): void {
    this.http.get<any>(`http://localhost:3000/survey/report/${this.id}`).subscribe(
      (response) => {
        console.log('getting the responses');
        this.responses = response.responses;
        console.log(this.responses)
      },
      (error) => {
        console.log('error fetching responses', error);
      }
    );
  }
}
