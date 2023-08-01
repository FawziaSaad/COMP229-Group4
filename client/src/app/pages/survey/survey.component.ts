// survey-take.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from 'src/app/model/survey.model';
import { SurveyRepository } from 'src/app/model/survey.repository';
import { HttpClient} from '@angular/common/http';

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

  constructor(
    private surveyRepository: SurveyRepository,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
   
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

    // Check the arrays
    console.log('//=============================================');
    console.log(questions);
    console.log(responses[0])
    console.log('//=============================================');

    let responseToSend = {
      surveyId: this.id,
      respondentId: "1", // the req.user.id -> current user will go here
      takenBy: "Moh", //req.user.displayName -> Same for this one
      questions: questions,
      responses: responses[0]
    };

    console.log(responseToSend)
    try {
      this.http.post(`http://localhost:3000/survey/${this.id}`, responseToSend).subscribe(
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
}
