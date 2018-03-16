import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicSearchComponent } from './music-search/music-search.component';

import { MusicService } from './shared/music.service';
import { ApiService } from './shared/api.service';

import {AutoCompleteModule, PanelMenuModule} from 'primeng/primeng';

@NgModule({
  imports: [
    AutoCompleteModule,
    CommonModule,
    BrowserAnimationsModule,
    PanelMenuModule
  ],
  exports: [
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicSearchComponent
  ],
  declarations: [
    MusicDetailsComponent,
    MusicFooterComponent,
    MusicPlayerComponent,
    MusicProgressComponent,
    MusicSearchComponent
  ],
  providers: [
    ApiService,
    MusicService
  ]
})
export class MusicModule { }
