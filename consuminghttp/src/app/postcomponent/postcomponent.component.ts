import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent {
posts;
private url = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
    http.get(this.url)
    .subscribe(response => {
      this.posts = response
      console.log(this.posts);
    });
  }   

  createPost(input: HTMLInputElement) {
    let post = { title:input.value };

    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      console.log(response);
    });
  }


}
