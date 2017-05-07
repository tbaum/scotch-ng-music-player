import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.scss']
})
export class MusicProgressComponent implements OnInit {

  @Input('elapsed') elapsed: string;
  @Input('total') total: string;
  @Input('current') current: number;

  constructor() { }

  ngOnInit() {
  }

}
