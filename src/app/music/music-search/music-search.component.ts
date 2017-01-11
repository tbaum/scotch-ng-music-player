import {Component, Injectable, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.css']
})
export class MusicSearchComponent {
  track: string;
  @Output() update = new EventEmitter();

  results: string[];

  search(event) {
    this.results = ['monalis', 'christiana', 'chioma', 'ekeoma'];
    this.update.emit(this.track);
  }
}
