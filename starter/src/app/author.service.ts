import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthors() {
    return ['Author 1','Author 3','Author 3'];
  }
}
