import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TVChannelsComponent } from './tvchannels/tvchannels.component';



@NgModule({
  declarations: [TVChannelsComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TVChannelsComponent
  ]
})
export class TvCanalsModule { }
