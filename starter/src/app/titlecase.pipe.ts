import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string) {
    if (!value) 
    return null;
    
    let prepersitions = [
      'of',
      'the'
    ]

    let words = value.split(' ');
    if(words) {
      for(var i = 0; i < words.length;i++) {
        if(prepersitions.includes(words[i].toLocaleLowerCase())){
          
        }
      }
    }
  

}
