import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  posterUrl = '../../../../assets/lokiposter.jpg';

  gerneItems = [
    {
      id: 1,
      name: 'SomeName1',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
    },
    {
      id: 2,
      name: 'SomeName2',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
    },
    {
      id: 3,
      name: 'SomeName3',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
    },
    {
      id: 4,
      name: 'SomeName4',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
    },
    {
      id: 5,
      name: 'SomeName5',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
    },
    {
      id: 6,
      name: 'SomeName6',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
    },
    {
      id: 7,
      name: 'SomeName7',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
    },
    {
      id: 8,
      name: 'SomeName8',
      description: 'Some description of some film/movie, some description of some movie, some some some some some some'
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
