import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie/movie.component';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MovieComponent
  ]
})
export class MovieModule { }
