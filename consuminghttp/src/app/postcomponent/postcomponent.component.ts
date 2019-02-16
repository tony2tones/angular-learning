import { Component, OnInit } from "@angular/core";

import { PostService } from "../services/post.service";

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
    }, error => {
      alert('An unexpected error has occurred.');
      console.log(error);
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
    }, error => {
      alert('An unexpected error has occurred.')
      console.log(error);
    });
  }
  deletePost(post){
    this.service.deletePost(post)
    .subscribe(response => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1);
    }, error =>{
      alert('An unexpected error has occurred.')
      console.log(error);
    })
  }
}
