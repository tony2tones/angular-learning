import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorServicesService {

  constructor() { }
  getAuthors() {
    return ['Author 1','Author 3','Author 3',]
  }
}
