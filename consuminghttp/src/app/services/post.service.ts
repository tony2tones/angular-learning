import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) { }

  getPosts(){
    this.http.get(this.url)
  }
}
