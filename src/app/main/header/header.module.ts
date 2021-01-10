import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {AuthModalComponent} from '../auth-modal/auth-modal/auth-modal.component';
import {AuthModalModule} from '../auth-modal/auth-modal.module';
import {NameFirstLetterPipe} from '../../core/pipes/name-first-letter.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    NameFirstLetterPipe
  ],
  exports: [
    HeaderComponent,
    NameFirstLetterPipe
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AuthModalModule
  ]
})
export class HeaderModule { }
