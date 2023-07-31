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
  
  questionLength : number[] = new Array(5);
  MCQoptions : number[] = new Array(4);
  selectedSurveyType: string = '';
  formData: any = {};

  
  constructor(route: ActivatedRoute, private http : HttpClient){
    super(route)
  }
  
  override ngOnInit(): void {
    
  }

  onSurveyTypeChange() {
    // You can perform any additional logic here if needed when the selection changes.
    // For example, you could reset form fields or perform some action based on the selected value.
  }

  onSubmit() {
    const postData = {
      questions: this.formData
    };
    this.http.post('YOUR_API_ENDPOINT', postData)
      .subscribe(
        (response) => {
          console.log('POST request successful:', response);
          // Handle the response as needed
        },
        (error) => {
          console.error('Error occurred:', error);
          // Handle errors if any
        }
      );



  }


}
