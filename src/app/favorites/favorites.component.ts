import {Component, OnInit} from '@angular/core';
import {FavoritesService} from "./favorites.service";
import {IMovieDetails} from "../@types/Interfaces";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [
    // FavoritesService
  ]
})
export class FavoritesComponent implements OnInit {

  favoriteMovies?: IMovieDetails[]

  constructor(public favorites: FavoritesService) {
  }


  ngOnInit(): void {
    this.favoriteMovies = this.favorites.favoriteMovies
    console.log(this.favorites.favoriteMovies)
  }

  removeFromFavorites(id: number) {
    this.favoriteMovies = this.favorites.remove(id);
    return this.favoriteMovies
  }

}
