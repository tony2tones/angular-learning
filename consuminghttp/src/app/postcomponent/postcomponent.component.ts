import { Component, OnInit } from "@angular/core";

import { PostService } from "../services/post.service";
import { AppError } from "../common/validators/app-error";
import { NotFoundError } from "../common/validators/not-found-error";
import { BadInput } from "../common/validators/bad-input";

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
    this.service.getAll().subscribe(posts => (this.posts = posts));
  }

  createPost(input: HTMLInputElement) {
    let post: any = { title: input.value };
    input.value = "";

    this.service.create(post).subscribe(
      response => {
        post.id = response["id"];
        console.log(post.id);
        this.posts.splice(0, 0, post);

        // this.service.create(post).subscribe(
        //   post => (post["id"] = this.posts.splice(0, 0, post)))
        //     // console.log(post.id); 
        // }

      }
    );
  }

  deletePost(post) {
    this.service.delete(post.id).subscribe(
      (response: Object) => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) {
          alert("This post has already been deleted.");
        }
      }
    );
  }
}
