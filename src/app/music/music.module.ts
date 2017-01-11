import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/primeng';

import { MusicSearchComponent } from './music-search/music-search.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { MusicDetailsComponent } from './music-details/music-details.component';
import { MusicProgressComponent } from './music-progress/music-progress.component';
import { MusicFooterComponent } from './music-footer/music-footer.component';

@NgModule({
    imports: [
      FormsModule,
      AutoCompleteModule
    ],
    exports: [
      MusicSearchComponent,
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
      MusicFooterComponent
    ],
    declarations: [
      MusicSearchComponent,
      MusicDetailsComponent,
      MusicPlayerComponent,
      MusicProgressComponent,
      MusicFooterComponent
    ],
    providers: [],
})
export class MusicModule { }
