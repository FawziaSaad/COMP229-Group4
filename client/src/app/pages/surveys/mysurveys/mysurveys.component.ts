import { Component, OnInit } from '@angular/core';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { Survey } from 'src/app/model/survey.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mysurveys',
  templateUrl: './mysurveys.component.html',
  styleUrls: ['./mysurveys.component.css']
})
export class MysurveysComponent implements OnInit {

  displayName: string = '';
  title: string = 'My Surveys';
  mySurveys: Survey[] = []; // Changed property name to mySurveys

  constructor(private repository: SurveyRepository, 
              private http: HttpClient,
              private router: Router) {}

  ngOnInit(): void {
    
  }

  get surveys(): Survey[] {


    const id: string = 	"error";
    // const id: string = '64af8fd980dd9f85a3f7e807'; //admin
    // const id: string = '64b04fdc4038f37b48c37ce7'; //Fawzia
    return this.repository.getSurveys().filter((survey) => survey.userid === id);
  }

  onDeleteSurvey(surveyId: string ){
    try {
      
      this.http.delete(`http://localhost:3000/survey/delete/${surveyId}`).subscribe(
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
    const id: string = 'error'; // Replace this with the actual user ID or any other identifier you use for filtering
    // const id: string = '64af8fd980dd9f85a3f7e807'; //admin
    // const id: string = '64b04fdc4038f37b48c37ce7'; //Fawzia
    this.mySurveys = this.repository.getSurveys().filter((survey) => survey.userid === id);
  }

  

}
