import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  authors= ['Author 1','Author 2','Author 3'];;
  getAuthors() {
    return this.authors 
  }

}
