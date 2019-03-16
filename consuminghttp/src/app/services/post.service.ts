import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AppError} from '../common/validators/app-error'
import { NotFoundError } from '../common/validators/not-found-error';


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

  deletePost(id){
    return this.http.delete(this.url + '/' + id)
    .catch((error: Response) => {
      if(error.status === 404) {
        return Observable.throw(new NotFoundError())
      }
      return Observable.throw(new AppError(error));
    });
  }
}
 