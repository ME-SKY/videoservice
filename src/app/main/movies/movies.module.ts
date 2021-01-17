import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies/movies.component';
// import {ScrollBarComponent} from '../scroll-bar/scroll-bar/scroll-bar.component';
import {ScrollBarModule} from '../scroll-bar/scroll-bar.module';
import {AppModule} from '../../app.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [MoviesComponent],
  exports: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    ScrollBarModule,
    RouterModule
  ]
})
export class MoviesModule { }
