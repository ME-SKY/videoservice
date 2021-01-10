import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthModalComponent} from '../../auth-modal/auth-modal/auth-modal.component';
import {AuthService} from '../../../core/services/auth-service';
import {User} from '../../../core/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  userAuthenticated = false;
  user: User = new User();


  constructor(
    public dialog: MatDialog,
    private authService: AuthService) {
    this.authService.loggedIn.subscribe(x => {
      this.userAuthenticated = x;
      this.user = (this.userAuthenticated ? this.authService.currentUserValue : null) as User;
    });
  }

  ngOnInit(): void {
    // this.authService.currentUser.subscribe(x => {
    //   console.log('currentUser');
    //   console.log(x);
    // });
  }

  openAuth(): void {
    const dialogRef = this.dialog.open(AuthModalComponent, {
      width: '304px',
      height: '394px',
      data: {
        someDataOne: 'someData1',
        someDataTwo: 'someData2'
      },
      backdropClass: 'auth-background'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  changeName(): void {

  }

  singOut(): void {
    this.authService.logout();
  }
}

