import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
// import {GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import {AuthService} from '../../../core/services/auth-service';
import {FormControl} from '@angular/forms';

export interface DialogData {
  someDataOne: string;
  someDataTwo: string;
}


@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {


  userName = new FormControl('');
  password = new FormControl('');

  constructor(
    public dialogRef: MatDialogRef<AuthModalComponent>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
  }


  // onNoClick(): void {
  //   this.dialogRef.close();
  // }



  ngOnInit(): void {
  }

  signIn(): void {
    console.log('signIn');
    console.log(this.userName);
    console.log(this.password);
    console.log(this.userName.value);
    console.log(this.password.value);
    this.authService.login(this.userName.value, this.password.value);
    this.dialogRef.close();
  }

  // signInWithGoogle(): void {
  //   this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  // }
  //
  // signOut(): void {
  //   this.authService.signOut();
  // }

}
