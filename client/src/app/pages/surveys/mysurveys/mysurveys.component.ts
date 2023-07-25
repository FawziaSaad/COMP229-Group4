import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MysurveysComponent extends BasePageComponent implements OnInit{
  constructor(route: ActivatedRoute){
    super(route)
  }
  override ngOnInit(): void {
    
  }
}