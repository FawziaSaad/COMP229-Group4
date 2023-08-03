import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from './survey.model';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ENDPOINTS } from './api-endpoints';
import { Response } from './response.model';


// const PROTOCOL = 'http';
// const PORT = 3500;

@Injectable()
export class RestDataSource
{
    baseUrl: string = API_BASE_URL;

    private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };
    constructor(private http: HttpClient)
    {
        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
        this.baseUrl = API_BASE_URL;

    }

    getSurveylist(): Observable<Survey[]>
    {
        return this.http.get<Survey[]>(this.baseUrl + API_ENDPOINTS.HOME_PAGE, this.httpOptions);
    }

    getResponseList(): Observable<Response[]> 
    {
      
        return this.http.get<Response[]>(this.baseUrl + API_ENDPOINTS.SURVEY_REPORT, this.httpOptions);
    }
    


    // NB:  In Angular, HTTP requests are asynchronous, so when you call this.http.get method,
    // it returns an observable, and you need to subscribe to it to get the actual data.
    // getSurveyById(id: string): Observable<Survey> {
    //     return this.http.get<Survey>(this.baseUrl + API_ENDPOINTS.TAKE_SURVEY + id);
    // } 
    // UNESSARY API CALL

}
