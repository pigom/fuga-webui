import {Injectable, OnInit, OnDestroy} from '@angular/core';
import {Observable, Subject} from 'rxjs/Rx';
import * as Rx from 'rxjs/Rx';
import {StompService} from '@stomp/ng2-stompjs';
import {Message} from '@stomp/stompjs';

import {Subscription} from 'rxjs/Subscription';

const WS_URL = 'ws://localhost:8080/fuga-ws/';


@Injectable()
export class WebsocketService implements OnInit, OnDestroy {
  private subscribed: boolean;
  private subscription: Subscription;
  public messages: Observable<Message>;
  // Array of historic message (bodies)
  public mq: Array<string> = [];

  // A count of messages received
  public count = 0;

  private _counter = 1;

  constructor(private stomp: StompService) {
    console.log('created web socket service');
  }

  ngOnInit(): void {
    this.subscribed = false;
    // Store local reference to Observable
    // for use with template ( | async )
  }

  ngOnDestroy(): void {
    this.unsubscribe();
  }

  public subscribe(callback) {
    if (this.subscribed) {
      return;
    }

    // Stream of messages
    this.messages = this.stomp.subscribe('/topic/players');

    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(callback);
    console.log('subscribed !');
    this.subscribed = true;
  }


  public unsubscribe() {
    if (!this.subscribed) {
      return;
    }

    // This will internally unsubscribe from Stomp Broker
    // There are two subscriptions - one created explicitly, the other created in the template by use of 'async'
    this.subscription.unsubscribe();
    this.subscription = null;
    this.messages = null;

    this.subscribed = false;
  }

  /** Consume a message from the _stompService */
  public on_next = (message: Message) => {

    // Store message in "historic messages" queue
    this.mq.push(message.body + '\n');

    // Count it
    this.count++;

    // Log it to the console
    console.log(message);
  }

  public sendMessage() {
    this.stomp.publish('/app/players', '');
  }



}



