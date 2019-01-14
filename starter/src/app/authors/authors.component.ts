import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';
import  FormsModule  from '@angular/forms';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html'
})


export class AuthorsComponent {
    title = "List of authors";
    authors;
    movieTitle: string;

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
    }
    
}