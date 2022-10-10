import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IMovie, IMoviesResponse} from "../@types/Interfaces";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-related-movies',
  templateUrl: './related-movies.component.html',
  styleUrls: ['./related-movies.component.scss']
})

export class RelatedMoviesComponent implements OnInit {
  @Input() set movieId(value: number) {
    if (!value) {
      return
    }
    this.http.get<IMoviesResponse<IMovie>>(`https://api.themoviedb.org/3/movie/${value}/similar?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&page=1`)
      .subscribe((res: IMoviesResponse<IMovie>) => {
        // console.log('res--->', res)
        this.relatedMovies = res.results;
      })
  };

  @Output() relatedMoviesSent = new EventEmitter<IMovie[]>()

  sendMovies() {
    // this.relatedMoviesSent.subscribe((value) => {
    // })
    this.relatedMoviesSent.emit(this.relatedMovies)
  }

  relatedMovies ?: IMovie[];

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
