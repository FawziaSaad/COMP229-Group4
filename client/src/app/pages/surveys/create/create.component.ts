import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../../partials/base-page/base-page.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends BasePageComponent implements OnInit{
  
  questionLength : number[] = new Array(2);
  MCQoptions : number[] = new Array(4);
  selectedSurveyType: string = '';
  formData: any = {};

  
  constructor(route: ActivatedRoute, private http : HttpClient){
    super(route)
  }
  
  override ngOnInit(): void {
    
  }

  onSurveyTypeChange() {}

  onMCQFormSubmit() {
    // Handle the submission logic for the MCQ form.
    const postData = {
      surveyType: 'MCQ',
      questions: this.formData
    };
    this.http.post('/create-survey', postData).subscribe(
      (response) => {
        console.log('MCQ Form submitted:', response);
        // Handle the response as needed
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }

  onSAFormSubmit() {
    // Handle the submission logic for the SA form.

    console.log(`DEBUG SA`)

    const postData = {
      surveyType: 'SA',
      questions: this.formData
    };
    this.http.post('/create-survey', postData).subscribe(
      (response) => {
        console.log('SA Form submitted:', response);
        // Handle the response as needed
      },
      (error) => {
        console.error('Error occurred:', error);
      }
    );
  }


}
