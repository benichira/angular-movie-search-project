import {Component, Input, OnInit} from '@angular/core';
import {IShow} from "../@types/Interfaces";

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.scss']
})
export class ShowResultsComponent implements OnInit {

  @Input() shows?: IShow[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
