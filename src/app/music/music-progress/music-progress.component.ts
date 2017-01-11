import {Component, Input} from '@angular/core';

@Component({
  selector: 'music-progress',
  templateUrl: './music-progress.component.html',
  styleUrls: ['./music-progress.component.css'],
})
export class MusicProgressComponent {
  @Input() elapsed: string = '0:00';
  @Input() total: string = '0:00';
  @Input() current: number = 0.5;
}

