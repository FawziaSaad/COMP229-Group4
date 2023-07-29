import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Survey } from './survey.model';
import { Observable } from 'rxjs';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource
{
    baseUrl: string;


    constructor(private http: HttpClient)
    {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/api/`;
    }

    getBooks(): Observable<Survey[]>
    {
        return this.http.get<Survey[]>(this.baseUrl + 'survey-site');
    }



}
