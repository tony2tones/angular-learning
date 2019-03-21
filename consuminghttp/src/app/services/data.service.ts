import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { AppError } from "../common/validators/app-error";
import { NotFoundError } from "../common/validators/not-found-error";
import { BadInput } from "../common/validators/bad-input";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).catch(this.handleError);
  }

  create(resource) {
    return this.http
      .post(this.url, JSON.stringify(resource))
      .catch(this.handleError);
  }

  update(resource) {
    return this.http
      .patch(this.url + "/" + resource.id, JSON.stringify({ isRead: true }))
      .catch(this.handleError);
  }

  delete(id) {
    return this.http.delete(this.url + "/" + id).catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400) {
      return Observable.throwError(new BadInput());
    }
    if (error.status === 404) {
      return Observable.throwError(new NotFoundError());
    }
    return Observable.throwError(new AppError(error));
  }
}
