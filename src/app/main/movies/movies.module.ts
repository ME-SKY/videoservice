import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
import {ScrollBarModule} from '../scroll-bar/scroll-bar.module';
import {RouterModule} from '@angular/router';
import {CarouselModule} from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [MoviesComponent],
  exports: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    ScrollBarModule,
    RouterModule,
    CarouselModule
  ]
})
export class MoviesModule { }
