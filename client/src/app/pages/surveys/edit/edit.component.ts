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
  public currentSurvey: Survey;
  mcqContainerDisplay = 'none';
  saContainerDisplay = 'none';
  public id: any = this.route.snapshot.paramMap.get('id');


  constructor(
    private route: ActivatedRoute, 
    private surveyRepository: SurveyRepository, 
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
  get surveyToEdit() {
    // this.surveyToTake = this.surveyRepository.getSurveyById(this.id);

    this.currentSurvey = this.surveyRepository.getSurveyById(this.id);
    return this.currentSurvey;
    console.log(this.currentSurvey);
  }

  onSubmit1(data): void {
    // Assuming 'data' contains the updated survey details
    this.surveyRepository.saveSurvey(data);
    this.router.navigate(['/']);
  }
  onSubmit2(data): void {
    // Assuming 'data' contains the updated survey details
    this.surveyRepository.saveSurvey(data);
    this.router.navigate(['/']);
  }
}
