import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Question } from './question.model';
import { User } from './user.model';
import { Response } from './response.model';
import { Observable, from } from 'rxjs';
import { get } from 'jquery';

@Injectable()
export class StaticDataSource {
  private users: User[] = [
    new User(1, 'Moh', 'baz@example.com', 'Moh'),
    new User(2, 'Dave', 'foo@example.com', 'Dave'),
  ];
  //you were right dave
  // moh = new User('1', 'Moh', 'baz@example.com', 'Moh');
  // dave = new User('2', 'Dave', 'foo@example.com', 'Dave');
  private questions: Question[] = [
    new Question(1, 'Favourite Food', 'Pizza', 'Burgers', 'Pasta', 'Sushi'),
    new Question(2, 'Favourite Drink', 'Coke', 'Pepsi', 'Fanta', 'Sprite'),
    new Question(
      3,
      'Favourite Game',
      'Chess',
      'Football',
      'Basketball',
      'Tennis'
    ),
    new Question(4, 'Favourite Trip', 'Toronto', 'New York', 'London', 'Tokyo'),
  ];

  private surveys: Survey[] = [
    new Survey(
      
      'Survey 1',
      1,
      this.users[0]._id,
      this.users[0].username,
      new Date('2023-07-23'),
      'SA',
      new Date('2023-07-25'),
      [this.questions[0], this.questions[1]]
    ),

    new Survey(
      
      'Survey 2',
      2,
      this.users[0]._id,
      this.users[0].username,
      new Date('2023-06-13'),
      'SA',
      new Date('2023-06-23'),
      [this.questions[1], this.questions[2]]
    ),
    new Survey(
      
      'Survey 3',
      3,
      this.users[1]._id,
      this.users[1].username,
      new Date('2023-04-25'),
      'SA',
      new Date('2023-07-29'),
      [this.questions[3], this.questions[1]]
    ),
  ];
  private responses: Response[] = [
    new Response(
      1,
      this.surveys[0]._id,
      this.users[1]._id,
      this.users[1].username,
      new Date('2023-07-24'),
      ['Favourite Food', 'Favourite Drink'],
      ['Pizza', 'Coke']
    ),
    new Response(
      2,
      this.surveys[0]._id,
      this.users[2]._id,
      this.users[2].username,
      new Date('2023-07-25'),
      ['Favourite Food', 'Favourite Drink'],
      ['Burgers', 'Pepsi']
    ),
    new Response(
      3,
      this.surveys[1]._id,
      this.users[1]._id,
      this.users[1].username,
      new Date('2023-06-15'),
      ['Favourite Game', 'Favourite Trip'],
      ['Chess', 'Paris']
    ),
    new Response(
      4,
      this.surveys[1]._id,
      this.users[2]._id,
      this.users[2].username,
      new Date('2023-06-20'),
      ['Favourite Game', 'Favourite Trip'],
      ['Football', 'New York']
    ),
    new Response(
      5,
      this.surveys[2]._id,
      this.users[1]._id,
      this.users[1].username,
      new Date('2023-08-02'),
      ['Favourite Color', 'Favourite Animal'],
      ['Blue', 'Dog']
    ),
    new Response(
      6,
      this.surveys[2]._id,
      this.users[1]._id,
      this.users[1].username,
      new Date('2023-08-05'),
      ['Favourite Color', 'Favourite Animal'],
      ['Green', 'Cat']
    ),
  ];

  getSurveys(): Observable<Survey[]> {
    return from([this.surveys]);
  }
  getResponses(): Observable<Response[]> {
    return from([this.responses]);
  }
  getQuestions(): Observable<Question[]> {
    return from([this.questions]);
  }
  getUsers(): Observable<User[]> {
    return from([this.users]);
  }
}
