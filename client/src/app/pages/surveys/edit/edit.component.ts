import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Survey } from '../../../model/survey.model';
import { SurveyRepository } from '../../../model/survey.repository';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public survey: Survey;
  mcqContainerDisplay = 'none';
  saContainerDisplay = 'none';
  public id: any = this.route.snapshot.paramMap.get('id');
  constructor(
    private route: ActivatedRoute, 
    private surveyRepo: SurveyRepository, 
    private router: Router
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
  get surveyToedit() {
    // this.surveyToTake = this.surveyRepository.getSurveyById(this.id);

    this.survey = this.surveyRepo.getSurveyById(this.id);
    return this.survey;
    console.log(this.survey);
  }

  onSubmit1(data): void {
    // Assuming 'data' contains the updated survey details
    this.surveyRepo.saveSurvey(data);
    this.router.navigate(['/']);
  }
  onSubmit2(data): void {
    // Assuming 'data' contains the updated survey details
    this.surveyRepo.saveSurvey(data);
    this.router.navigate(['/']);
  }
}
