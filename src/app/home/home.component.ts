import {
  Component,
  // EventEmitter,
  OnInit,
  // Output
} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


import {IMovie, IMovieDetails, IMoviesResponse} from "../@types/Interfaces";
import {FavoritesService} from "../favorites/favorites.service";
import {PrimeIcons} from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [
    // FavoritesService
  ]
})

export class HomeComponent implements OnInit {

  // @Output() favoriteM = new EventEmitter<IMovieDetails[]>()

  constructor(private http: HttpClient, public favorites: FavoritesService) {
  }

  movies: IMovie[] = [];
  favoriteMovies?: IMovieDetails[]

  ngOnInit(): any {
    this.http.get<IMoviesResponse<IMovie>>('https://api.themoviedb.org/3/trending/all/day?api_key=9a99b30d21b8a588189ca7ab443a2d3d')
      .subscribe((data) => {
        this.movies = data.results;
      })
  }

  addToFavorites(id: number, $event: any) {
    console.log($event)
    this.favorites.add(id)
    this.favoriteMovies = this.favorites.favoriteMovies
    console.log(this.favoriteMovies)
    // this.favoriteM.emit(this.favoriteMovies)
  }

}

