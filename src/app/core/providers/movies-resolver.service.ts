import {Injectable} from '@angular/core';
import {DataService} from '@src-app/core/services/data.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolverService  implements Resolve <Observable<any>> {

  constructor(private ds: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.ds.getAllMovies().pipe(
      map(moviesData => moviesData)
    )
  }
}
