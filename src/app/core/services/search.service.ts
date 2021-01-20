import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchString = new BehaviorSubject<string>('');

  constructor() { }

  changeString(newString: string){
    this.searchString.next(newString);
  }

  stringChanged(): Observable<any>{
    return this.searchString.asObservable();
  }

  clean(){
    this.searchString.next('');
  }
}
