import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from '../../../partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent extends BasePageComponent implements OnInit{
  constructor(route: ActivatedRoute){
    super(route)
  }
  override ngOnInit(): void {
    
  }
}
