import { Component } from '@angular/core';

@Component({
    selector: 'star',
    template: `<i (click)="clickHandler()" [ngClass]= "isActive ? 'far fa-star' : 'fas fa-star'">`
})

export class StarComponent {
    isActive = false;

    clickHandler() {
        this.isActive =!this.isActive;
    }
}