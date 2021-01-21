import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {SearchService} from '@src-app/core/services/search.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {ActivatedRoute} from '@angular/router';
import {MovieShort} from '@src-app/core/models/movie-short';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
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


  genreItems = [
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


  newMovieItems = [
    {
      id: 1,
      name: 'SomeName1',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
    },
    {
      id: 2,
      name: 'SomeName2',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
    },
    {
      id: 3,
      name: 'SomeName3',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
    },
    {
      id: 4,
      name: 'SomeName4',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
    },
    {
      id: 5,
      name: 'SomeName5',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
    },
    {
      id: 6,
      name: 'SomeName6',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
    },
    {
      id: 7,
      name: 'SomeName7',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
    },
    {
      id: 8,
      name: 'SomeName8',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some',
      shortDescription: 'Some description',
      previewPoster: this.posterUrl
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
