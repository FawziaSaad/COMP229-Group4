import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../../../model/survey.model';
import { SurveyRepository } from '../../../model/survey.repository';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public currentSurvey: Survey;
  mcqContainerDisplay = 'none';
  saContainerDisplay = 'none';
  public id: any = this.route.snapshot.paramMap.get('id');


  constructor(
    private route: ActivatedRoute, 
    private surveyRepository: SurveyRepository, 
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {}
  //   this.route.paramMap.subscribe(params => {
  //     const id = params.get('id');
  //     this.surveyRepo.getEditableSurvey(id).subscribe(data => {
  //       this.survey = data;
  //       console.log(this.survey);

  //     });
  //   });
  // }
  get surveyToEdit() {
    // this.surveyToTake = this.surveyRepository.getSurveyById(this.id);

    this.currentSurvey = this.surveyRepository.getSurveyById(this.id);
    return this.currentSurvey;
    console.log(this.currentSurvey);
  }

  onSubmit1(data): void {
    // console.log(JSON.stringify(data) + this.surveyType.nativeElement.value);
    // POST METHOD GO HERE TO CREATE SURVEY IN SERVER
    let surveyToEdit = {
      surveyName: data.surveyName,
      surveyType: "MCQ",
      Question1: String,
      Question2: String,
      response1: [],
      response2: []
    };
    for (let i = 0; i < 2; i++) {
      surveyToEdit[`Question${i+1}`] = data[`Question${i + 1}`];
      for (let j = 0; j < 4; j++) {
        surveyToEdit[`response${i+1}`].push(data[`response${i+1}${j+1}`]);
      }
    }

    try {
      this.http.post(`http://localhost:3000/survey/edit/${this.id}`, surveyToEdit).subscribe(
        (response) => {
          console.log('MCQ Form submitted:', response);
          // Handle the response as needed
        }
      );
    }
    catch (err) {
      console.log(err);
    }
    this.router.navigate(['/survey/mysurveys']);
  }
  onSubmit2(data): void {
    // console.log(JSON.stringify(data) + this.surveyType.nativeElement.value);
    // POST METHOD GO HERE TO CREATE SURVEY IN SERVER

    let surveyToSend = {
      surveyName: data.surveyName,
      surveyType: "SA",
      Question1: String,
      Question2: String
    }
    for (let i = 0; i < 2; i++) {
       surveyToSend[`Question${i+1}`] = data[`Question${i + 1}`];
    }

    try {
      this.http.post(`http://localhost:3000/survey/edit/${this.id}`, surveyToSend).subscribe(
        (response) => {
          console.log('SA Form submitted:', response);
          // Handle the response as needed
        });
    }
    catch (err) {
      console.log(err);
    }
    this.router.navigate(['/survey/mysurveys']);
  }
}











