import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string) {
    if(!value){
    return null;
    }
    let preps = [
      'of',
      'the'
    ]
    let words = value.split(' ');
    if(value) {
      for(var i = 0; i < words.length; i++){
        if(i > 0 && preps.includes(words[i].toLowerCase())){
          words[i] = words[i].toLowerCase();
        } else {
          words[i] = words[i].substr(0,1).toUpperCase() + words[i].substr(1).toLowerCase();
        }
      }
      return words.join(' ');
    }
  }

}
