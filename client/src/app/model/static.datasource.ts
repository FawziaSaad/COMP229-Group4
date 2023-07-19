import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { Observable, from } from 'rxjs';

@Injectable()
export class StaticDataSource
{
  private books: Survey[] =
  [
    new Survey(1, 'Book 1', 'Author 1'),
    new Survey(2, 'Book 2', 'Author 1'),
    new Survey(3, 'Book 3', 'Author 1'),
    new Survey(4, 'Book 4', 'Author 1'),
    new Survey(5, 'Book 5', 'Author 2'),
  ]
  getBooks(): Observable<Survey[]>
  {
    return from([this.books]);
  }
}
