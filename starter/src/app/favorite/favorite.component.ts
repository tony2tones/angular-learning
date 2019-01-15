import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `<i (click)="onClick()" [ngClass]= "isFavorite ? 'far fa-star' : 'fas fa-star'">`,
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  @Input() isFavorite: boolean;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isFavorite = !this.isFavorite;
  }

}
