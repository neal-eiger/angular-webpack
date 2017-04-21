import { Component } from '@angular/core';
import { EventBus } from 'vertx3-eventbus-client';

import { ApiService } from './shared';

import '../style/app.scss';

@Component({
  selector: 'my-app', // <my-app></my-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';
  title: string;

  constructor(private api: ApiService) {
    this.title = this.api.title;

    // here is the eventbus part that fails
    let eb = new EventBus('http://localhost:8080');
    eb.send('queue', 'hello vertx', (res) => console.log('res: ' + res));
  }
}
