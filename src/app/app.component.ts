import { Component } from '@angular/core';
import { Player } from './player-detail/player';

const PLAYERS: Player[] = [
  { id: 1, name: 'Vincent'},
  { id: 2, name: 'Milo'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  players = PLAYERS;
}
