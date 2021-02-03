import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../../core/services/auth-service';
import {FormBuilder, Validators} from '@angular/forms';
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


  authForm = this.fb.group({
    userName: ['', [Validators.required, Validators.minLength(2)]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(
    public dialogRef: MatDialogRef<AuthModalComponent>,
    private authService: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

  signIn(): void {
    const [fName, lName] = this.authForm.controls.userName.value.split(' ', 2);

    const user = new User({
      id: 1,
      username: this.authForm.controls.userName.value,
      password: this.authForm.controls.password.value,
      firstName: fName,
      lastName: lName
    });

    this.authService.login(user);
    this.dialogRef.close();
  }
}
