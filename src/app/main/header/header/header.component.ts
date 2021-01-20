import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthModalComponent} from '../../auth-modal/auth-modal/auth-modal.component';
import {AuthService} from '../../../core/services/auth-service';
import {IUser, User} from '../../../core/models/user';
import {FormControl} from '@angular/forms';
import {DataService} from '../../../core/services/data.service';
import {NameFirstLetterPipe} from '../../../core/pipes/name-first-letter.pipe';
import {SearchService} from '@src-app/core/services/search.service';
import {debounceTime, filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NameFirstLetterPipe]
})
export class HeaderComponent implements OnInit, OnDestroy {


  userAuthenticated = false;
  changingUserName = false;

  user: IUser;

  changingUserNameControl = new FormControl({value: '', readOnly: true});
  searchControl = new FormControl('');

  subs$ = new Subject();


  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private dataService: DataService,
    private nFirstLetterPipe: NameFirstLetterPipe,
    private searchService: SearchService) {

    this.authService.loggedIn.subscribe(x => {
      if (x) {
        this.userAuthenticated = x;
        this.user = this.authService.currentUserValue as User;
        const username = `${this.user.firstName} ${nFirstLetterPipe.transform(this.user.lastName)}`;
        this.changingUserNameControl.setValue(username, {emitEvent: false});
      }
    });
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      takeUntil(this.subs$),
      debounceTime(500),
      filter(x => x.length > 2)
    ).subscribe(x => {
        this.searchService.changeString(x);
      }
    );
  }

  openAuth(): void {
    this.dialog.open(AuthModalComponent, {
      width: '304px',
      height: '394px',
      backdropClass: 'auth-background'
    });
  }

  changeName(): void {
    this.changingUserName = true;
    this.changingUserNameControl.patchValue(this.user.username);
  }

  singOut(): void {
    this.authService.logout();
  }

  saveName() {
    this.user.username = this.changingUserNameControl.value;

    const [firstName, lastName] = this.user.username.split(' ', 2);
    this.user.firstName = firstName;
    this.user.lastName = lastName;

    this.dataService.changeUser(this.user);
    this.changingUserNameControl.patchValue(`${firstName} ${this.nFirstLetterPipe.transform(lastName)}`);

    this.changingUserName = false;
  }

  ngOnDestroy(): void {
    this.searchService.clean();
    this.subs$.next();
    this.subs$.complete();
  }
}

