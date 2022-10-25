import { Component, OnInit } from '@angular/core';
import { FavoritesService } from './favorites.service';
import { IMovieDetails } from '../@types/Interfaces';
import { MenuItem } from 'primeng/api';
import { MegaMenuItem } from 'primeng/api';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [
    // FavoritesService
  ]
})
export class FavoritesComponent implements OnInit {
  favoriteMovies?: IMovieDetails[];
  public items: MenuItem[] = [];

  constructor(public favorites: FavoritesService) {}

  // this.favoriteMovies = this.favorites.favoriteMovies;
  // console.log(this.favorites.favoriteMovies);

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [{ label: 'New', icon: 'pi pi-plus' }, { label: 'Open', icon: 'pi pi-download' }]
      },
      {
        label: 'Edit',
        items: [{ label: 'Undo', icon: 'pi pi-refresh' }, { label: 'Redo', icon: 'pi pi-repeat' }]
      }
    ];
  }

  removeFromFavorites(id: number) {
    this.favoriteMovies = this.favorites.remove(id);
    return this.favoriteMovies;
  }
}
