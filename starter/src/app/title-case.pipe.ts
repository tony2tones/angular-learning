import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string) {
    if(!value){
    return null;
    }
    let words = value.split(' ');
    if(value) {
      for(var i = 0; i < words.length; i++){
        if(i > 0 && this.isPrepersition(words[i])){
          words[i] = words[i].toLowerCase();
        } else {
          words[i] = this.title(words[i]);
        }
      }
      return words.join(' ');
    }
  }
  private title(words:string) {
    return words = words.substr(0,1).toUpperCase() + words.substr(1).toLowerCase();
  }
  private isPrepersition(words: string): boolean {
    let preps = ['of','the'];
    return preps.includes(words.toLowerCase());
  }

}
