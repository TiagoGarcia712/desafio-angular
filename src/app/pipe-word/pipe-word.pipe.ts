import { Pipe, PipeTransform } from '@angular/core';
import { MinValidator } from '@angular/forms';

@Pipe({
  name: 'pipeWord'
})
export class PipeWordPipe implements PipeTransform {

  transform(value: string | number): string {
    if (typeof value === 'number') {
      return value.toString().concat('.');
    } else {
      return value.concat('.');
    }
  }

}
