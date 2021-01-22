import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import {HeaderModule} from './header/header.module';
import {MoviesModule} from './movies/movies.module';
import {MatTabsModule} from '@angular/material/tabs';
import {FooterModule} from './footer/footer.module';
import {TvCanalsModule} from './tv-canals/tv-canals.module';
import {MainContentComponent} from './main/main-content/main-content.component';
import {RouterModule} from '@angular/router';
import {MovieModule} from './movie/movie.module';


@NgModule({
  declarations: [MainComponent, MainContentComponent],
  imports: [
    CommonModule,
    MatInputModule,
    HeaderModule,
    MoviesModule,
    MatTabsModule,
    FooterModule,
    TvCanalsModule,
    MovieModule,
    RouterModule,
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
