import {Component, OnInit} from '@angular/core';
import {Movie} from '../../../core/models/movie';
import {DataService} from '../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl} from '@angular/forms';
import {Comment} from '@src-app/core/models/comment';
import {IUser, User} from '@src-app/core/models/user';
import {AuthService} from '@src-app/core/services/auth-service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  movie: Movie;
  currentUser: IUser;

  commentControl = new FormControl('');

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private authService: AuthService) {
    this.currentUser = this.authService.currentUserValue as User;

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
  }

  removeComment(commentId: number) {
    this.movie.comments = this.movie.comments.filter(x => x.id !== commentId);
    this.dataService.saveComments(this.movie.id, this.movie.comments);
  }

}
