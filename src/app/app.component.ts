import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  cardId = 1;
  count = 0;
  constructor() {
    console.log(environment.api);
  }

  public increase() {
    this.count = this.count + 1;
  }

  public decrease() {
    this.count = this.count - 1;
  }
}
