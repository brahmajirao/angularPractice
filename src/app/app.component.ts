import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Angular app';
  viewMode = 'courses';
  post = {
    title: "Title",
    isFovorite: true
  }
}
