import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFirstLetter'
})
export class NameFirstLetterPipe implements PipeTransform {

  transform(value: string | undefined, withDot: boolean = true): string {
    if (withDot && value){
      return value.charAt(0) + (withDot ? '.' : '');
    } else {
      return '';
    }
  }

}
