import {Component, OnInit} from '@angular/core';
import {WebsocketService} from './websocket.service';
import {Player} from '../player-detail/player';
import {Message} from '@stomp/stompjs';

@Component({
  selector: 'app-player-refresh',
  templateUrl: './player-refresh.component.html',
  styleUrls: ['./player-refresh.component.css'],
  providers: [WebsocketService]
})
export class PlayerRefreshComponent implements OnInit {

  public players: Player[];

  constructor(private wsService: WebsocketService) {

  }

  ngOnInit() {
    this.wsService.subscribe(this.topicCallback);
    this.wsService.sendMessage();
  }

  public topicCallback = (message: Message) => {
    this.players = JSON.parse(message.body).body || {};
  }

  sendMessage() {
    this.wsService.sendMessage();
  }

}
