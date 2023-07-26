import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Survey } from '../../model/survey.model';
import { Response } from '../../model/response.model';
import { Question } from '../../model/question.model';
import { SurveyRepository } from '../../model/survey.repository';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  id: any = this.route.snapshot.paramMap.get('id');
  constructor(private route: ActivatedRoute, private repository: SurveyRepository) { }

  ngOnInit(): void {
    
  }

  get surveyToTake(): Survey {
    console.log(this.repository.getSurvey(this.id));
    return this.repository.getSurvey(this.id);
  }

}
