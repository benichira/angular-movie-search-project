import { Component, Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { IMovie, IMoviesResponse } from '../@types/Interfaces';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent {
  constructor(private http: HttpClient) {}

  movie: string = '';
  movies: IMovie[] = [];
  foundMovies: boolean = true;

  onSubmit($event: any): any {
    console.log('event--->', $event);

    this.http
      .get<IMoviesResponse<IMovie>>(
        `https://api.themoviedb.org/3/search/movie?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&query=${this.movie}&page=1&include_adult=false`
      )
      .subscribe((data) => {
        if (data) {
          this.movies = data.results;
          if (this.movies.length === 0) {
            // console.log(this.foundMovies)
            this.foundMovies = false;
          } else {
            this.foundMovies = true;
            // console.log(this.foundMovies)
          }
          // console.log("movies--->", this.movies)
        }
      });
  }
}
