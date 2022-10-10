import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {TabViewModule} from 'primeng/tabview';
import {SidebarModule} from 'primeng/sidebar';

import {AppComponent} from './app.component';
import {routing} from "./app.routing";
import {ShowsComponent} from './shows/shows.component';
import {MoviesComponent} from './movies/movies.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from "./header/header.component";
import {ItemCardComponent} from './item-card/item-card.component';
import {FormsModule} from "@angular/forms";
import {MovieResultsComponent} from './movie-results/movie-results.component';
import {MovieDetailsComponent} from './movie-details/movie-details.component';
import {RelatedMoviesComponent} from './related-movies/related-movies.component';
import {ShowDetailsComponent} from './show-details/show-details.component';
import {ShowResultsComponent} from './show-results/show-results.component';
import {FavoritesComponent} from './favorites/favorites.component';
import {FavoritesService} from "./favorites/favorites.service";
import {ButtonModule} from "primeng/button";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    AppComponent,
    ShowsComponent,
    MoviesComponent,
    HomeComponent,
    HeaderComponent,
    ItemCardComponent,
    MovieResultsComponent,
    MovieDetailsComponent,
    RelatedMoviesComponent,
    ShowDetailsComponent,
    ShowResultsComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    SidebarModule,
    HttpClientModule,
    routing,
    FormsModule,
    ButtonModule,
    TagModule
  ],
  providers: [FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
