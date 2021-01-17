import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  public loggedIn = new BehaviorSubject<boolean>(false);

  constructor() {
    const currentUser = localStorage.getItem('currentUser');
    this.currentUserSubject = new BehaviorSubject<User | null>(currentUser ? JSON.parse(currentUser) : null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.loggedIn.next(!!(this.currentUserSubject.value));
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  // public get loggedIn(): boolean {
  //   const user = this.currentUserValue;
  //   return (user && user.username && user.username.length > 0) as boolean;
  // }


  login(username: string, password: string): void {

    const [fName, lName] = username.split(' ', 2);
    localStorage.setItem('currentUser', JSON.stringify({username, password, firstName: fName, lastName: lName}));
    this.currentUserSubject.next({username, password, firstName: fName, lastName: lName});
    this.loggedIn.next(true);

    // return user;
    // return
    // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
    //   .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        // localStorage.setItem('currentUser', JSON.stringify(user));
        // this.currentUserSubject.next(user);
        // return user;
      // }));
  }

  logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.loggedIn.next(false);
  }
}
