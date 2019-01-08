import { LikeComponent } from './likes.component';

let component = new LikeComponent(10, false) 
    component.onClick();
        console.log(`number of likes ${component.likesCount} and is selected state ${component.isSelected}`)
    
