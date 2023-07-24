import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  mcqContainerDisplay = 'none';
  saContainerDisplay = 'none';
  @ViewChild ('surveyType') surveyType: ElementRef;

  constructor(private router: Router) { }
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
    console.log(JSON.stringify(data) + this.surveyType.nativeElement.value);
    // POST METHOD GO HERE TO CREATE SURVEY IN SERVER

    this.router.navigate(['/surveys']);
  }

  onSubmit2(data) {
    console.log(JSON.stringify(data) + this.surveyType.nativeElement.value);
    // POST METHOD GO HERE TO CREATE SURVEY IN SERVER
    this.router.navigate(['/surveys']);
  }
  ngOnInit(): void {
  }

}
