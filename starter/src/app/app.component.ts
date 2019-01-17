import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses =[
    {id:1, name: 'Course 1'},
    {id:2, name: 'Course 2'},
    {id:3, name: 'Course 3'}
]
  viewMode = 'map';
  tweet = {
          likesCount: 0,
          isActive: false
          }

  title = 'Angular app';
  post = {
    title: 'Title',
    isFavorite: true
  }
  onAdd() {
    this.courses.push({id:4, name: 'Course 4'});
  }
  onRemove(course){
    let index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

}
