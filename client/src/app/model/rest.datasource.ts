import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from './survey.model';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ENDPOINTS } from './api-endpoints';

// const PROTOCOL = 'http';
// const PORT = 3000;

@Injectable()
export class RestDataSource
{
    baseUrl: string;


    constructor(private http: HttpClient)
    {
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
        this.baseUrl = API_BASE_URL;

    }

    getSurveylist(): Observable<Survey[]>
    {
        // return this.http.get<Survey[]>(this.baseUrl + 'survey-site');
        return this.http.get<Survey[]>(this.baseUrl + API_ENDPOINTS.HOME_PAGE);

    }

// getQuestions(): Observable<Question[]> {
//     return this.http.get<Question[]>(this.baseUrl + API_ENDPOINTS.GET_QUESTIONS);
//   }

//   getResponses(): Observable<Response[]> {
//     return this.http.get<Response[]>(this.baseUrl + API_ENDPOINTS.GET_RESPONSES);
//   }


}
