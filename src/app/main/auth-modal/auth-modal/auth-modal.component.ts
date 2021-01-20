import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
// import {GoogleLoginProvider, SocialAuthService} from 'angularx-social-login';
import {AuthService} from '../../../core/services/auth-service';
import {FormControl} from '@angular/forms';
import {User} from '../../../core/models/user';

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

  ngOnInit(): void {
  }

  signIn(): void {
    const [fName, lName] = this.userName.value.split(' ', 2);

    const user = new User({
      id: 1,
      username: this.userName.value,
      password: this.password.value,
      firstName: fName,
      lastName: lName
    });

    this.authService.login(user);
    this.dialogRef.close();
  }
}
