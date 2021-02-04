import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AuthModalComponent} from '../../auth-modal/auth-modal/auth-modal.component';
import {AuthService} from '../../../core/services/auth-service';
import {IUser, User} from '../../../core/models/user';
import {FormBuilder} from '@angular/forms';
import {DataService} from '../../../core/services/data.service';
import {NameFirstLetterPipe} from '../../../core/pipes/name-first-letter.pipe';
import {SearchService} from '@src-app/core/services/search.service';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';
import {MatMenuTrigger} from '@angular/material/menu';

interface EventCount {
  digit: number,
  event: any
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [NameFirstLetterPipe]
})
export class HeaderComponent implements OnInit, OnDestroy {


  userAuthenticated: boolean = false;
  changingUserName: boolean = false;

  user: IUser;

  changingUserNameControl = this.fb.control({value: '', readOnly: true});
  searchControl = this.fb.control('');

  subs$ = new Subject();

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(
    public dialog: MatDialog,
    private authService: AuthService,
    private dataService: DataService,
    private nFirstLetterPipe: NameFirstLetterPipe,
    private searchService: SearchService,
    private router: Router,
    private fb: FormBuilder) {

    this.authService.loggedIn.pipe(
      takeUntil(this.subs$)
    ).subscribe(x => {
      this.userAuthenticated = x;
      if (x) {
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
    ).subscribe(x => {
        this.searchService.changeString(x);
        if(this.router.url !== '/home') {
          this.router.navigate(['home'])
        }
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

  search(){
    this.searchService.changeString(this.searchControl.value)
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
    this.trigger.closeMenu()
  }

  ngOnDestroy(): void {
    this.searchService.clean();
    this.subs$.next();
    this.subs$.complete();
  }
}

