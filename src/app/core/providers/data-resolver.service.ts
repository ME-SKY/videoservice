import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve <Observable<any>>{

  constructor(private ds: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.ds.getData(parseInt(route.params.id, 10)).pipe(
      take(1),
      map(movieData => movieData)
    )
  }
}
