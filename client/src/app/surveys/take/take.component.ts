import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  id: any = this.route.snapshot.paramMap.get('id');
  surveyToTake: any = [];
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.id);

    this.http.get(`http://localhost:3000/survey/${this.id}`).subscribe((response) => {
      console.log(response);
      this.surveyToTake = response;
    })
  }

}
