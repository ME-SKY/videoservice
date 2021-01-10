import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main/main.component';
import {MatInputModule} from '@angular/material/input';
import {HeaderModule} from './header/header.module';
import {MoviesModule} from './movies/movies.module';
import {MatTabsModule} from '@angular/material/tabs';
import {FooterModule} from './footer/footer.module';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatInputModule,
    HeaderModule,
    MoviesModule,
    MatTabsModule,
    FooterModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule {
}
