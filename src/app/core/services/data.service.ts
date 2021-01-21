import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie} from '../models/movie';
import {Comment} from '@src-app/core/models/comment';
import {IUser} from '../models/user';
import {HttpClient} from '@angular/common/http';
import {MovieShort} from '@src-app/core/models/movie-short';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }


  getMovie(id: number): Observable<Movie | any> {
    return this.http.get('assets/test-data/movies-in-detail.json')
      .pipe(
        map(data => {
          const movies = data as Array<Movie>;
          return movies.find(mv => mv.id === id);
        }));
  }

  getAllMovies(){
    return this.http.get('assets/test-data/movies.json')
      .pipe(
        map(data => {
          return data as Array<MovieShort>;
        }));
  }

  getCommentsFromStorage(movieId: number) {
    return JSON.parse(<string> localStorage.getItem(`movie-${movieId}-comments`)) as Comment [];
  }

  saveComments(movieId: number, comments: Comment []) {
    localStorage.setItem(`movie-${movieId}-comments`, JSON.stringify(comments));
  }

  changeUser(user: IUser) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }


}
