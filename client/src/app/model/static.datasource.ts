import { Injectable } from '@angular/core';
import { Survey, Question, User } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
    // private users: User[] = 
    // [
    //     new User('1', 'Moh', 'baz@example.com', 'Moh'),
    //     new User('2', 'Dave', 'foo@example.com', 'Dave'),
    // ]

    //?
        
    moh = new User('1', 'Moh', 'baz@example.com', 'Moh');
    dave = new User('2', 'Dave', 'foo@example.com', 'Dave')

    private surveys: Survey[] = 
    [
        new Survey(
            'Survey 1', 
            '1', 
            this.dave._id, 
            this.dave.username, 
            new Date('2023-07-23'), 
            'SA', 
            new Date('2023-07-25'), 
            [new Question('Favourite Food'),
             new Question('Favourite Drink')]
            ),
            
        new Survey(
            'Survey 2',
            '2', 
            this.dave._id, 
            this.dave.username, 
            new Date('2023-06-13'), 
            'SA', 
            new Date('2023-06-23'), 
            [new Question('Favourite Game'),
             new Question('Favourite Trip')]
            ),
        new Survey(
            'Survey 3',
            '3', 
            this.moh._id, 
            this.moh.username, 
            new Date('2023-04-25'), 
            'SA', 
            new Date('2023-07-29'), 
            [new Question('Favourite Plane'), 
             new Question('Favourite Car')]
            )
    ]

    getSurveys(): Observable<Survey[]>
    {
        return from([this.surveys]);
    }
}