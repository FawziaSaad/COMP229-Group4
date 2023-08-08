import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  mcqContainerDisplay = 'none';
  saContainerDisplay = 'none';
  user: any;
  displayName: string = '';
  userid: string = '';
  @ViewChild ('surveyType') surveyType: ElementRef;

  constructor(private router: Router, private http: HttpClient) { }
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
  onSubmit1(data) {
    // console.log(JSON.stringify(data) + this.surveyType.nativeElement.value);
    // POST METHOD GO HERE TO CREATE SURVEY IN SERVER
    let surveyToSend = {
      surveyName: data.surveyName,
      displayName: this.displayName,
      userid: this.userid,
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
      displayName: this.displayName,
      userid: this.userid,
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
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userid = this.user.id;
    this.displayName = this.user.displayName;
    console.log(this.user.displayName);
  
  }

}
