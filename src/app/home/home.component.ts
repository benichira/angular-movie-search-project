import {Component, OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

interface IMoviesResponse<ResType> {
  page: number;
  results: ResType[];
  total_pages: number;
  total_results: number
}

interface IMovie {
  adult: boolean;
  backdrop_path: string;
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string;
  media_type: string;
  genre_ids: number[];
  popularity: number;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
  origin_country: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Injectable()
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  movies: IMovie[] = [];

  ngOnInit(): any {
    this.http.get<IMoviesResponse<IMovie>>('https://api.themoviedb.org/3/trending/all/day?api_key=9a99b30d21b8a588189ca7ab443a2d3d')
      .subscribe((data) => {
        this.movies = data.results;
        console.log('movies--->', this.movies)
      })
  }
}

