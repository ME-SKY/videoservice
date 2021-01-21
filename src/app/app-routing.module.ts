import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainContentComponent} from './main/main/main-content/main-content.component';
import {MovieResolverService} from './core/providers/movie-resolver.service';
import {MoviesResolverService} from '@src-app/core/providers/movies-resolver.service';
// import { }

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
    path: 'movie/:id',
    loadChildren: () => import('./main/movie/movie.module').then(m => m.MovieModule),
    // loadChildren: () => import('./main/movie/movie.module').then(m => m.MovieModule),
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
