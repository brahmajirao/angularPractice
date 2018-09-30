import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizestrwords'
})
export class CapitalizestrwordsPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(!value)
      return null;
      
    return value.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');


  }

}
