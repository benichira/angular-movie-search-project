import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IShow, IShowsResponse} from "../@types/Interfaces";

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss']
})
export class ShowsComponent implements OnInit {

  show: string = '';
  foundShows: boolean = true;
  showResults?: IShow[];

  constructor(private http: HttpClient) {
  }

  searchTVShow() {
    this.http.get<IShowsResponse<IShow>>(`https://api.themoviedb.org/3/search/tv?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US&page=1&query=${this.show}&include_adult=false`)
      .subscribe((showsList) => {
        if (showsList) {
          this.showResults = showsList.results
          this.foundShows = this.showResults.length !== 0;
        }
        return
      })
  }

  ngOnInit(): void {

  }

}
