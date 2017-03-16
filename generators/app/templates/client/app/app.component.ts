import { Component } from '@angular/core';

import '../styles/main.scss';

@Component({
  selector: 'ui-app', // <ui-app></ui-app>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ui';

  constructor() {

  }
}
