import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AppError } from "../common/validators/app-error";
import { NotFoundError } from "../common/validators/not-found-error";
import { BadInput } from "../common/validators/bad-input";

@Injectable({
  providedIn: "root"
})
export class PostService {
  private url = "http://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  create(post) {
    return this.http
      .post(this.url, JSON.stringify(post))
      .catch((error: Response) => {
        if (error instanceof BadInput) {
          return Observable.throwError(new BadInput(error.json()));
        }
        return Observable.throwError(new AppError(error.json()));
      });
  }

  updatePost(post) {
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }

  deletePost(id) {
    return this.http.delete(this.url + "/" + id).catch(this.handError)
  }

  private handError(error:Response) {
    if (error.status === 404) {
      return Observable.throwError(new NotFoundError());
    }
    return Observable.throwError(new AppError(error));
  };
}
