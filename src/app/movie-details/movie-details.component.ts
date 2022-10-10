import {Component, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {distinctUntilKeyChanged, switchMap} from "rxjs";
import {IMovie, IMovieDetails} from "../@types/Interfaces";


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  // param: Observable<Params> = this.activatedRoute.params
  movieId?: string | null
  movie?: IMovieDetails
  moviesRelated?: IMovie[];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params.pipe(
      distinctUntilKeyChanged('movieId'),
      switchMap((params) => {
        return this.http.get<IMovieDetails>(`https://api.themoviedb.org/3/movie/${params['movieId']}?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`);
      }))
      .subscribe((movieResult) => {
        this.movie = movieResult;

        // console.log('movie--->', this.movie)
      }, error => console.error(error))
  }

  receiveMovies($event: any) {
    this.moviesRelated = $event
    console.log('event', $event)
  }
}
