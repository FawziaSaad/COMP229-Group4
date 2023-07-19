import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { get } from 'jquery';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: any = [];
  // surveys: any = [
  //   {
  //     _id: 1,
  //     title: 'Survey 1',
  //     author: 'Author 1',
  //     endDate: '2021-04-01',
  //   },
  //   {
  //     _id: 2,
  //     title: 'Survey 2',
  //     author: 'Author 2',
  //     endDate: '2021-04-02',
  //   },];

  constructor(private http: HttpClient) {
    
  
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000').subscribe((response) => {
      console.log(this.surveys);
      this.surveys = response;
    })

  }
}
