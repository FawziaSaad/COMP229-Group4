import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from './survey.model';
import { Observable } from 'rxjs';
import { API_BASE_URL, API_ENDPOINTS } from './api-endpoints';
import { Response } from './response.model';
import { User } from './user.model';
import { JwtHelperService } from '@auth0/angular-jwt';


// const PROTOCOL = 'http';
// const PORT = 3500;

@Injectable()
export class RestDataSource
{
  user: User;
  baseUrl: string = API_BASE_URL;
  authToken: string;

  private httpOptions =
  {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
    })
  };
    constructor(private http: HttpClient,
                private jwtService: JwtHelperService)
    {
      // new user
      this.user = new User();

        // this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
      this.baseUrl = API_BASE_URL;

    }

    getSurveylist(): Observable<Survey[]>
    {
        return this.http.get<Survey[]>(this.baseUrl + API_ENDPOINTS.HOME_PAGE, this.httpOptions);
    }

    getResponseList(): Observable<Response[]> 
    {
      this.loadToken();
      return this.http.get<Response[]>(this.baseUrl + API_ENDPOINTS.SURVEY_REPORT, this.httpOptions);
    }
    

    
    getSurveyToEdit(id: string): Observable<Survey> {

        this.loadToken(); // put here?
        return this.http.get<Survey>(`${this.baseUrl}${API_ENDPOINTS.EDIT_SURVEY_PAGE.replace(':id', id)}`);

    }


    updateSurvey(id: string, surveyData: any): Observable<any> {
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json'
      // });

      this.loadToken(); // put here?
      // return this.http.put(`${this.baseUrl}${API_ENDPOINTS.EDIT_SURVEY.replace(':id', id)}`, surveyData, { headers: headers });
      return this.http.put(`${this.baseUrl}${API_ENDPOINTS.EDIT_SURVEY.replace(':id', id)}`, surveyData, this.httpOptions);
    }

    authenticate(user: User): Observable<any>
    {
      return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
    }
      
    storeUserData(token: any, user: User): void
    {
      localStorage.setItem('id_token', 'Bearer ' + token);
      localStorage.setItem('user', JSON.stringify(user));
      this.authToken = token;
      this.user = user;
    }

    logout(): Observable<any>
    {
      this.authToken = null;
      this.user = null;
      localStorage.clear();

      return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
    }

    loggedIn(): boolean
    {
      return !this.jwtService.isTokenExpired(this.authToken);
    }

    private loadToken(): void
    {
      const token = localStorage.getItem('id_token');
      this.authToken = token;
      this.httpOptions.headers = this.httpOptions.headers.set('Authorization', this.authToken);
    }

  }

    // NB:  In Angular, HTTP requests are asynchronous, so when you call this.http.get method,
    // it returns an observable, and you need to subscribe to it to get the actual data.
    // getSurveyById(id: string): Observable<Survey> {
    //     return this.http.get<Survey>(this.baseUrl + API_ENDPOINTS.TAKE_SURVEY + id);
    // } 
    // UNESSARY API CALL








