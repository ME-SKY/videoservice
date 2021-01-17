import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MovieComponent} from './main/movie/movie/movie.component';
import {MainContentComponent} from './main/main/main-content/main-content.component';
import {DataResolverService} from './core/providers/data-resolver.service';

const routes: Routes = [
  {
    path: '', component: MainContentComponent
  },
  {
    path: 'movie/:id', component: MovieComponent,
    resolve: {
      movie: DataResolverService
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
