import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data = {
    title: '<h1>angular-for-begininers<h1><script>alert("Attack")</script>',
  };

  onButtonClick() {
    alert('hello world');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }
}
