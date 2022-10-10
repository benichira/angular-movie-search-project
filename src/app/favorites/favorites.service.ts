import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMovieDetails} from "../@types/Interfaces";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  constructor(private http: HttpClient) {
  }

  favoriteMovies: IMovieDetails[] = []

  get() {
    return this.favoriteMovies
  }

  add(id: number) {
    const movie = this.http.get<IMovieDetails>(`https://api.themoviedb.org/3/movie/${id}?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`)
      .pipe(
        map((movie) => {
          if (this.favoriteMovies.some((value) => value.id === movie.id)) {
            console.log('movie already added to favorites')
          }
          return movie
        })
      )
      .subscribe((movie) => {
        return this.favoriteMovies.push(movie)
      });

    return this.favoriteMovies
  }

  remove(movieId: number) {
    this.favoriteMovies = this.favoriteMovies.filter((movie) => movieId !== movie.id)
    return this.favoriteMovies
  }
}
