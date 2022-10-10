import {Routes, RouterModule} from '@angular/router';
import {ShowsComponent} from "./shows/shows.component";
import {MoviesComponent} from "./movies/movies.component";
import {HomeComponent} from "./home/home.component";
import {MovieDetailsComponent} from "./movie-details/movie-details.component";
import {ShowDetailsComponent} from "./show-details/show-details.component";
import {AuthGuard} from "./authentification/auth.guard";
import {FavoritesComponent} from "./favorites/favorites.component";


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'shows', component: ShowsComponent},
  {path: 'shows/:showId', component: ShowDetailsComponent},
  {
    path: 'movies', canActivate: [AuthGuard], children: [
      {path: '', component: MoviesComponent},
      {path: ':movieId', component: MovieDetailsComponent}
    ]
  },
  {path: 'favorites', component: FavoritesComponent}
];
export const routing = RouterModule.forRoot(appRoutes)
