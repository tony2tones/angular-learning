import { Component, OnInit } from "@angular/core";

import { PostService } from "../services/post.service";
import { AppError } from "app/common/validators/app-error";
import { BadInput } from "app/common/validators/bad-input";
import { NotFoundError } from "app/common/validators/not-found-error";
import { isObject } from "util";

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
    this.posts.splice(0, 0, post);
    input.value = "";

    this.service.create(post).subscribe(
      (post: Object) => post["id"],
      (error: AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          alert("this is baaad input");
        } else throw error;
      }
    );
  }

  updatePost(post) {
    this.service.update(post).subscribe(updatedPost => {
      console.log(updatedPost);
    });
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.service.delete(post.id).subscribe(
      null,
      (error: AppError) => {
        this.posts.splice(index, 0, post);

        if (error instanceof NotFoundError)
          alert("This post has already been deleted.");
        else throw error;
      }
    );
  }
}
