import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../partials/base-page/base-page.component';
import { Survey } from 'src/app/model/survey.model';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class TakeSurveyComponent extends BasePageComponent implements OnInit{

  surveyToTake: Survey | undefined;

  constructor(route: ActivatedRoute){
    super(route)
  }
  override ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.getSurveyById(id);
  }

  getSurveyById(id: string): void {
    // Implement the logic to fetch the survey data using Angular's HttpClient or any other method.
    // Assign the survey data to the surveyToTake property.
  }


  onSubmit(): void {
    // Implement the logic to handle form submission when the "Submit Survey" button is clicked.
  }

}
