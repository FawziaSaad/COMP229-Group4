// survey-take.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { HttpClient} from '@angular/common/http';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class TakeSurveyComponent implements OnInit {
  selectedAnswers: any[] = [];
  MCQoptions : number[] = new Array(4);
  id: any = this.route.snapshot.paramMap.get('id');
  currentSurvey : Survey;
  user: any;
  userid: string = '';
  displayName: string = '';

  constructor(
    private surveyRepository: SurveyRepository,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {

  this.user = JSON.parse(localStorage.getItem('user'));
  this.userid = this.user.id;
  this.displayName = this.user.displayName;
  }



  get surveyToTake() {
    // this.surveyToTake = this.surveyRepository.getSurveyById(this.id);

    this.currentSurvey = this.surveyRepository.getSurveyById(this.id);
    return this.currentSurvey;
  }

  
  submitSurvey(data){    
    // console.log(this.currentSurvey.questions)
    
        let questions = [];
        let responses = [this.selectedAnswers];

    //push the questions in the question array
    for (let q of this.currentSurvey.questions) {
      questions.push(q.Question);
    }

    // // Check the arrays
    // console.log('//=============================================');
    // console.log(questions);
    // console.log(responses[0])
    // console.log('//=============================================');

    // If there is no user logged in, during post, set the values to anonymous
    if (this.displayName === "" || this.userid === ""){
      this.displayName = "Anonymous"
      this.userid = "Anonymous"
    }

    let responseToSend = {

      surveyId: this.id,
      respondentId: this.userid, // the req.user.id -> current user will go here
      takenBy: this.displayName, //req.user.displayName -> Same for this one
      // respondentId: this.user._id, //  -> current user will go here
      // takenBy: this.user.displayName, // -> Same for this one
      questions: questions,
      responses: responses[0]
    };

    console.log("Response to send:");
    console.log(responseToSend)
    try {
      this.http.post(`https://g4serverside.azurewebsites.net/survey/${this.id}`, responseToSend).subscribe(
        (response) => {
          console.log('Responses:', response);
          // Handle the response as needed
        }
      );
    }
    catch (err) {
      console.log(err);
    }
    this.router.navigate(['/']);
  }
}
