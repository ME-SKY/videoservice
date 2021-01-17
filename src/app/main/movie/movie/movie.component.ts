import { Component, OnInit } from '@angular/core';
import {Movie} from '../../../core/models/movie';
import {DataService} from '../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {


  movieFake: Movie = {
    id: 8493,
    name: 'Loki',
    description: 'A film about god Loki, A film about god Loki, A film about god Loki, ' +
      'A film about god Loki, A film about god Loki, A film about god Loki,' +
      ' A film about god Loki, A film about god Loki, A film about god Loki',
    genre: 'fantasy',
    country: 'USA',
    moviePosterUrl: '../../../../assets/lokiposter.jpg',
    comments: [
      {
        id: 1,
        user: 5,
        username: 'Jojo',
        commentText: 'Good film, Good filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood film'
      },
      {
        id: 2,
        user: 2,
        username: 'Jojo2',
        commentText: 'Good film, Good filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood film'
      },
      {
        id: 3,
        user: 4,
        username: 'Jojo3',
        commentText: 'Good film, Good filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood filmGood film'
      }
    ]
  };

  movie: Movie = this.movieFake;

  // comments = [];
  constructor( private dataService: DataService,
               private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.data.movie){
      console.log('it exists');
      console.log(this.route.snapshot.data.movie);
      this.movie = this.route.snapshot.data.movie
    } else {
      this.dataService.putDataInStorageWithoutObservable(this.movieFake, this.movieFake.id)
      // this.dataService.putDataInStorage(this.movie).subscribe(() => {
      //
      // })
    }
    // this.dataService.putDataInStorage(this.movie)
  }

}
