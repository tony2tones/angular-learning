import { Component } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  tweet = {
          likesCount: 0,
          isActive: false
          }
  
}
