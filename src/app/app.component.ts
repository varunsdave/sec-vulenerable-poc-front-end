import { Component } from '@angular/core';
import { BackendCallService } from './services/backend-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'a simple-app with known exploits';

  constructor() {}

}

