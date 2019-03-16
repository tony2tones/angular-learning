import { Component, OnInit } from "@angular/core";

import { PostService } from "../services/post.service";
import { AppError } from '../common/validators/app-error';
import { NotFoundError } from '../common/validators/not-found-error';

@Component({
  selector: "postcomponent",
  templateUrl: "./postcomponent.component.html",
  styleUrls: ["./postcomponent.component.css"]
})
export class PostcomponentComponent implements OnInit {
  posts;
  private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private service: PostService) {}
  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
      this.posts = response;
    }, 
    (error: Response) => {
      if(error.status === 404) {
        alert('Service is not available.');
      }
      else {
      alert('An unexpected error has occurred.');
      console.log(error);
      }
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.service.create(post)
      .subscribe(response => {
      post.id = response["id"];
      console.log(post.id);
      this.posts.splice(0, 0, post);
    }, 
    (error: Response) => {
      alert('An unexpected error has occurred.')
      console.log(error);
    });
  }
  deletePost(post){
    this.service.deletePost(600000)
    .subscribe((response: Object) => {
      let index = this.posts.indexOf(post);
      if (!response.hasOwnProperty(post)) {
        alert(`Post ${index} does not exist`)
        console.error(response);
      }  
      // let index = this.posts.indexOf(post);
      // this.posts.splice(index,1);
    }, 
    (error: AppError) => {
      if(error instanceof NotFoundError) {
        alert('This post has already been deleted.');
      } 
      else {
      alert('An unexpected error has occurred.')
      console.log(error);
      }
    })
  }
}
