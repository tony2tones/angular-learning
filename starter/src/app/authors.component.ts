import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: 'authors',
    template: `
        <h2>{{ title }}</h2>
         <ul>
            <li *ngFor="let course of authors"> 
            {{ course }}
            </li>
        </ul>`
})


export class authorsComponent {
    title = "List of authors";
    authors;

    constructor(service: AuthorsService){
        this.authors = service.getAuthors();
    }
}