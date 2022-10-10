import {Component, Input, OnInit} from '@angular/core';
import {IShowDetails} from "../@types/Interfaces";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Route} from "@angular/router";
import {distinctUntilKeyChanged, switchMap} from "rxjs";

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss']
})
export class ShowDetailsComponent implements OnInit {
  // @Input() show?: IShow
  showId?: string | null;
  show?: IShowDetails;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      distinctUntilKeyChanged('showId'),
      switchMap((params) => {
        return this.http.get<IShowDetails>(`https://api.themoviedb.org/3/tv/${params['showId']}?api_key=9a99b30d21b8a588189ca7ab443a2d3d&language=en-US`);
      }))
      .subscribe((showResult) => {
        this.show = showResult;
      })
  }

}
