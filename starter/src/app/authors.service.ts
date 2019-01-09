import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
authList = ['Author 1','Author 3','Author 3'];
  constructor() { }
  getAuthors() {
    return this.authList;
  }

  authorCount() {
    return this.authList.length;
  }
}
