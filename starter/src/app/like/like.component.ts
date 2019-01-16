import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  @Input('isActive') isSelected: boolean;
  @Input('likesCount') likesCount: number;
  
  onClick() {
    this.likesCount = this.isSelected ? -1 : 1;
    this.isSelected = !this.isSelected;
    console.log('this has been clicked');
  }
}
