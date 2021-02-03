import {Component, OnDestroy, OnInit} from '@angular/core';
import {Movie} from '../../../core/models/movie';
import {DataService} from '../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {Comment} from '@src-app/core/models/comment';
import {IUser} from '@src-app/core/models/user';
import {AuthService} from '@src-app/core/services/auth-service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie: Movie;
  currentUser: IUser;
  subs$: Subject<any> = new Subject();

  commentControl = this.fb.control('', [
    Validators.minLength(3),
    Validators.required]);

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private fb: FormBuilder) {

    this.authService.currentUser.pipe(
      takeUntil(this.subs$)
    ).subscribe(user => {
      this.currentUser = user as IUser;
      if (!this.currentUser) {
        this.commentControl.disable();
      } else {
        this.commentControl.enable();
      }
    });
  }

  ngOnInit(): void {
    this.movie = this.route.snapshot.data.movieData;
    let comments = this.dataService.getCommentsFromStorage(this.movie.id);
    if (!comments) {
      this.dataService.saveComments(this.movie.id, this.movie.comments);
    } else {
      this.movie.comments = comments;
    }
  }

  saveComment() {
    const id = Math.max(...this.movie.comments.map(cm => cm.id)) + 1;
    const comment: Comment = {
      id: id,
      userId: this.currentUser.id,
      username: this.currentUser.username,
      commentText: this.commentControl.value
    };
    this.movie.comments.unshift(comment);

    this.dataService.saveComments(this.movie.id, this.movie.comments);
    this.commentControl.patchValue('');
  }

  removeComment(commentId: number) {
    this.movie.comments = this.movie.comments.filter(x => x.id !== commentId);
    this.dataService.saveComments(this.movie.id, this.movie.comments);
  }

  ngOnDestroy(): void {
    this.subs$.next();
    this.subs$.complete();
  }

}
