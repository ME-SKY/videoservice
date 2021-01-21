import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SearchService} from '@src-app/core/services/search.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {MovieShort} from '@src-app/core/models/movie-short';
import {Genre} from '@src-app/core/models/genre';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {

  posterUrl = 'assets/images/movie-posters/lokiposter.jpg';

  customOptions: OwlOptions = {
    items: 4,
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    margin: 20,
    navSpeed: 700,
    navText: ['<', '>'],
    nav: false
  };

  isDragging = false;


  genreItems: Genre [] = [
    {
      id: 1,
      name: 'Комедии',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '😁'
    },
    {
      id: 2,
      name: 'Драмы',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '😭'
    },
    {
      id: 3,
      name: 'Фантастика',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '👽'
    },
    {
      id: 4,
      name: 'Ужасы',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '👻'
    },
    {
      id: 5,
      name: 'Детективы',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '🤔'
    },
    {
      id: 6,
      name: 'Триллеры',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '🤔'
    },
    {
      id: 7,
      name: 'Фэнтази',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '🤔'
    },
    {
      id: 8,
      name: 'Боевики',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      icon: '🤔'
    }
  ];


  filteredMovies$: BehaviorSubject<any> = new BehaviorSubject(null);
  movies: MovieShort [];

  constructor(
    private searchService: SearchService,
    private route: ActivatedRoute
  ) {
    this.movies = this.route.snapshot.data.moviesData;
    this.filteredMovies$.next(this.movies);
    this.searchService.stringChanged().subscribe(x => {
      this.filterMovies(x);
    });
  }


  filterMovies(str: string) {
    if(str && str.length >= 1){
      this.filteredMovies$.next(this.movies.filter(movie => movie.name.toLowerCase().includes(str.toLowerCase())));
    } else {
      this.filteredMovies$.next(this.movies)
    }
  }

  ngOnInit(): void {
    this.filteredMovies$.next(this.route.snapshot.data.moviesData)
  }

}
