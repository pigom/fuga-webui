import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {PlayerDetailComponent} from './player-detail/player-detail.component';
import {PlayerService} from './player.service';
import {WebsocketService} from './player-refresh/websocket.service';
import {HttpModule} from '@angular/http';
import {StompConfig, StompService} from '@stomp/ng2-stompjs';
import {PlayerRefreshComponent} from './player-refresh/player-refresh.component';

const stompConfig: StompConfig = {
  // Which server?
  url: 'ws://localhost:8080/fuga-ws/websocket',
  headers: {},
  heartbeat_in: 0, // Typical value 0 - disabled
  heartbeat_out: 20000, // Typical value 20000 - every 20 seconds
  // Wait in milliseconds before attempting auto reconnect
  // Set to 0 to disable
  // Typical value 5000 (5 seconds)
  reconnect_delay: 30000,
  debug: true
};

@NgModule({
  declarations: [
    AppComponent,
    PlayerDetailComponent,
    PlayerRefreshComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService,
    WebsocketService,
    StompService,
    {
      provide: StompConfig,
      useValue: stompConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
