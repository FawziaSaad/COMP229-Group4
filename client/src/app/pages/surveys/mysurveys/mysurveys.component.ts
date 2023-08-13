import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { Survey } from 'src/app/model/survey.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MysurveysComponent implements OnInit {

  displayName: string = '';
  title: string = 'My Surveys';
  mySurveys: Survey[] = []; // Changed property name to mySurveys
  user: any;
  userid: string = '';
  constructor(private repository: SurveyRepository, 
              private http: HttpClient,
              private router: Router) {}

  ngOnInit(): void {
    
    this.user = JSON.parse(localStorage.getItem('user'));
    this.displayName = this.user.displayName;
    this.mySurveys = this.surveys;
    console.log(this.mySurveys);
    console.log("this.user");
    console.log(this.user);
    console.log("this.displayName");
    console.log(this.displayName);
    console.log("user id");
    console.log(this.user.id);
  }

  get surveys(): Survey[] {
    const id: string = 	"error";
    return this.repository.getSurveys().filter((survey) => survey.userid === this.user.id);
  }

  onDeleteSurvey(surveyId: string ){
    try {
      
      this.http.delete(`https://g4serverside.azurewebsites.net/survey/delete/${surveyId}`).subscribe(
        (response) => {
          console.log('SA Form submitted:', response);
          // Handle the response as needed

          this.updateSurveyList();
          window.location.reload();

        }
      );
    }
    catch (err) {
      console.log(err);
    }
  }

  private updateSurveyList() {
    // Fetch the updated list of surveys after deletion
    this.mySurveys = this.repository.getSurveys().filter((survey) => survey.userid === this.user.id);
   
  }

  

}
