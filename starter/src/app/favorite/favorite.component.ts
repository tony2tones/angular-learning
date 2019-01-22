import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  @Input('isFavorite') isSelected: boolean;
  @Output() change = new EventEmitter();
  constructor() { }


  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit(this.isSelected);
  }

}
