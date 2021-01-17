import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Movie} from '../models/movie';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // movie: Movie = {
  //   id:
  // };

  constructor() { }


  getData(id: number): Observable<any> {
    return new Observable((o) => {

      const movieData = localStorage.getItem(`movie-${id}`);
      if(movieData != undefined){
        setTimeout(() => {
          o.next(movieData);
        }, 1000)
      } else {
        o.next(movieData);
      }

    }).pipe(
      tap(_ => console.log(`gettin movie with id: ${id}`)),
      catchError((er, ct) => {
        console.log('error handled');
        return ct;
      }))
  }


  putDataInStorage(data: Movie, id: number): Observable<any>{
    return of(localStorage.setItem(`movie-${id}`, JSON.stringify(data)));
  }

  putDataInStorageWithoutObservable(data: Movie, id: number): void{
    localStorage.setItem(`movie-${id}`, JSON.stringify(data));
  }


}
