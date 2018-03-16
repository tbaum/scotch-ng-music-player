import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {

  @Input() paused;
  @Output() backward = new EventEmitter();
  @Output() pausePlay = new EventEmitter();
  @Output() forward = new EventEmitter();
  @Output() random = new EventEmitter();
  @Output() stop = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
