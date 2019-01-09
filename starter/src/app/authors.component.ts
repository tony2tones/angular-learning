import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'authors',
    template: `
        <h2>{{ title }}</h2>
        <h3> {{ authorsCount }} Authors </h3>
         <ul>
            <li *ngFor="let author of authors"> 
            {{ author }}
            </li>
        </ul>`
})


export class AuthorsComponent {
    title = "List of authors";
    authors;
    authorsCount;

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
        this.authorsCount = service.authorCount();
    }
}