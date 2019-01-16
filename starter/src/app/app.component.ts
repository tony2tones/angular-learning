import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  tweet = {
          likesCount: 0,
          isActive: false
          }

  title = 'Angular app';
  post = {
    title: 'Title',
    isFavorite: true
  }

}
