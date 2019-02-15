import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'postcomponent',
  templateUrl: './postcomponent.component.html',
  styleUrls: ['./postcomponent.component.css']
})
export class PostcomponentComponent implements OnInit{
posts;


  constructor( service: PostService) { }   

  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post:any = { title:input.value };
    input.value = '';
    
    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      post.id = response['id'];
      console.log(post.id);
      this.posts.splice(0,0, post);
    });
  }

  updatePost(post){
    this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true}))
    .subscribe(response => {
      console.log(response);
    })
  }

  deletePost(post){
    this.http.delete(this.url + '/' + post.id)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    })
  }
}
