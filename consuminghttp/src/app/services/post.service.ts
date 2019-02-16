import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) { }

  getPosts(){
    return  this.http.get(this.url);
  }

  create(post) {
    return this.http.post(this.url, JSON.stringify(post));
  }

  deletePost(post){
    return this.http.delete(this.url + '/' + post.id);
  }
}
 