import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {map, take} from 'rxjs/operators';

import {DataService} from '../services/data.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieResolverService implements Resolve <Observable<any>>{

  constructor(private ds: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.ds.getMovie(parseInt(route.params.id, 10)).pipe(
      take(1),
      map(movieData => movieData)
    )
  }
}
