import {Comment} from './comment'

export interface Movie {
  id: number,
  name: string,
  country: string,
  genre: string,
  description: string,
  moviePosterUrl: string
  comments: Comment [];
}
