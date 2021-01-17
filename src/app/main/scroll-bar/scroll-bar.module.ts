import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollBarComponent} from './scroll-bar/scroll-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [ScrollBarComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    ScrollBarComponent
  ]
})
export class ScrollBarModule { }
