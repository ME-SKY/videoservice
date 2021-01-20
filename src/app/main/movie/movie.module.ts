import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie/movie.component';
import {MatButtonModule} from '@angular/material/button';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule {
}
