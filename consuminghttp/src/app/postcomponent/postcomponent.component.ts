import { Component, OnInit } from "@angular/core";

import { PostService } from "../services/post.service";
import { AppError } from 'app/common/validators/app-error';
import { BadInput } from 'app/common/validators/bad-input';

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
      response => {
        post.id = response["id"];
        console.log(post.id);
        

        // this.service.create(post).subscribe(
        //   post => (post["id"] = this.posts.splice(0, 0, post)))
        //     // console.log(post.id); 
        // }

      },
      (error:AppError) => {
        this.posts.splice(0, 1);

        if (error instanceof BadInput) {
          alert('this is baaad input');
        } else (error instanceof AppError)
          alert('something went wrong');
        
      }
    );
  }

  updatePost(post) {
    this.service.update(post)
    .subscribe(
      updatedPost => {
        console.log(updatedPost);
      }
    )
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    this.service.delete(post.id).subscribe(
      () => {
        console.log('this is a success?');
      },
      (error: AppError) => {
        
      }
    );
  }
}
