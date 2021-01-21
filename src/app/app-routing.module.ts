import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieComponent} from './main/movie/movie/movie.component';
import {MainContentComponent} from './main/main/main-content/main-content.component';
import {MovieResolverService} from './core/providers/movie-resolver.service';
import {MoviesResolverService} from '@src-app/core/providers/movies-resolver.service';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: MainContentComponent,
    resolve: {
      moviesData: MoviesResolverService
    }
  },
  {
    path: 'movie/:id', component: MovieComponent,
    resolve: {
      movieData: MovieResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
