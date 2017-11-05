import {Component, OnInit} from '@angular/core';
import {Player} from './player-detail/player';
import {PlayerService} from './player.service';
import {PlayerRefreshComponent} from './player-refresh/player-refresh.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})
export class AppComponent implements OnInit {
  players: Player[];

  constructor(private playerService: PlayerService) {

  }

  getPlayers(): void {
    this.playerService.getPlayers().then(players => this.players = players);
  }

  ngOnInit(): void {
    this.getPlayers();
  }
}
