// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit',
//   templateUrl: './edit.component.html',
//   styleUrls: ['./edit.component.css']
// })
// export class EditComponent {

// }

// survey-take.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { HttpClient} from '@angular/common/http';

// from create survey

import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
//import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-survey',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  mcqContainerDisplay = 'none';
  saContainerDisplay = 'none';
  @ViewChild ('surveyType') surveyType: ElementRef;

constructor(private router: Router, private http: HttpClient, private repository: SurveyRepository) { }
onSurveyTypeChange(surveyType: string) {
  if (surveyType === 'MCQ') {
    console.log('It is a Multiple Choice');
    this.mcqContainerDisplay = 'block';
    this.saContainerDisplay = 'none';
  } else if (surveyType === 'SA') {
    console.log('It is a Short Answer Survey');
    this.mcqContainerDisplay = 'none';
    this.saContainerDisplay = 'block';
  }
}

get surveys(): Survey[] {

  const id: string = 	"64b04fdc4038f37b48c37ce7";
  return this.repository.getSurveys().filter((survey) => survey.userid === id);
}

onSubmit1(data) {
  // console.log(JSON.stringify(data) + this.surveyType.nativeElement.value);
  // POST METHOD GO HERE TO CREATE SURVEY IN SERVER
  let surveyToSend = {
    surveyName: data.surveyName,
    surveyType: this.surveyType.nativeElement.value,
    Question1: String,
    Question2: String,
    response1: [],
    response2: []
  };
  for (let i = 0; i < 2; i++) {
    surveyToSend[`Question${i+1}`] = data[`Question${i + 1}`];
    for (let j = 0; j < 4; j++) {
      surveyToSend[`response${i+1}`].push(data[`response${i+1}${j+1}`]);
    }
  }

  try {
    this.http.post('http://localhost:3000/create-survey', surveyToSend).subscribe(
      (response) => {
        console.log('SA Form submitted:', response);
        // Handle the response as needed
      }
    );
  }
  catch (err) {
    console.log(err);
  }
  this.router.navigate(['/']);
}

onSubmit2(data) {
  // console.log(JSON.stringify(data) + this.surveyType.nativeElement.value);
  // POST METHOD GO HERE TO CREATE SURVEY IN SERVER

  let surveyToSend = {
    surveyName: data.surveyName,
    surveyType: this.surveyType.nativeElement.value,
    Question1: String,
    Question2: String
  }
  for (let i = 0; i < 2; i++) {
     surveyToSend[`Question${i+1}`] = data[`Question${i + 1}`];
  }

  try {
    this.http.post('http://localhost:3000/create-survey', surveyToSend).subscribe(
      (response) => {
        console.log('SA Form submitted:', response);
        // Handle the response as needed
      });
  }
  catch (err) {
    console.log(err);
  }
  this.router.navigate(['/']);
}
ngOnInit(): void {
}

}
