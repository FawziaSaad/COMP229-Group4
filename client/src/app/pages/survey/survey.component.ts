import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../partials/base-page/base-page.component';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent extends BasePageComponent implements OnInit{
  constructor(route: ActivatedRoute){
    super(route)
  }
  override ngOnInit(): void {
    
  }
}
