import {Injectable} from '@angular/core';
import {Response, Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Player} from './player-detail/player';
import {Observable, Subject} from 'rxjs/Rx';

export interface Message {
  players: Player[];
}


@Injectable()
export class PlayerService {

  public players: Subject<Message>;


  constructor(private http: Http) {

  }

  public getPlayers(): Promise<Player[]> {
    return this.http.get('http://localhost:8080/player')
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }
}
