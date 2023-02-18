import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello';
  m = "I am fine!";
  clicked() {
    this.title = 'hello is clicked';
  }
}
