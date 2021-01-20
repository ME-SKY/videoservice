import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TVChannelsComponent } from './tvchannels/tvchannels.component';
import {ScrollBarModule} from '@src-app/main/scroll-bar/scroll-bar.module';



@NgModule({
  declarations: [TVChannelsComponent],
  imports: [
    CommonModule,
    ScrollBarModule
  ],
  exports: [
    TVChannelsComponent
  ]
})
export class TvCanalsModule { }
