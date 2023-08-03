import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from './survey.model';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ENDPOINTS } from './api-endpoints';

// const PROTOCOL = 'http';
// const PORT = 3500;

@Injectable()
export class RestDataSource
{
    baseUrl: string = API_BASE_URL;


    constructor(private http: HttpClient)
    {
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
        this.baseUrl = API_BASE_URL;

    }

    getSurveylist(): Observable<Survey[]>
    {
        return this.http.get<Survey[]>(this.baseUrl + API_ENDPOINTS.HOME_PAGE);
    }
    
    getSurveyToEdit(id: string): Observable<Survey> {
        return this.http.get<Survey>(`${this.baseUrl}${API_ENDPOINTS.EDIT_SURVEY_PAGE.replace(':id', id)}`);
      }
      updateSurvey(id: string, surveyData: any): Observable<any> {
        const headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
        return this.http.put(`${this.baseUrl}${API_ENDPOINTS.EDIT_SURVEY.replace(':id', id)}`, surveyData, { headers: headers });
      }
    }

    // NB:  In Angular, HTTP requests are asynchronous, so when you call this.http.get method,
    // it returns an observable, and you need to subscribe to it to get the actual data.
    // getSurveyById(id: string): Observable<Survey> {
    //     return this.http.get<Survey>(this.baseUrl + API_ENDPOINTS.TAKE_SURVEY + id);
    // } 
    // UNESSARY API CALL


