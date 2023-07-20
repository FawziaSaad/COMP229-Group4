import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../../partials/base-page/base-page.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BasePageComponent implements OnInit{
  constructor(route: ActivatedRoute){
    super(route)
  }
  override ngOnInit(): void {
    
  }
}
