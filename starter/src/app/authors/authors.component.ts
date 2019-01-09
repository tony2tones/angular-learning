import { Component } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
    selector: 'authors',
    templateUrl: './authors.component.html'
})


export class AuthorsComponent {
    title = "List of authors";
    authors;
    authorsCount: number;

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
        this.authorsCount = service.authorCount();
    }
}