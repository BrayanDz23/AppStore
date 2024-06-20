import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reveerse',
  standalone: true
})
export class ReveersePipe implements PipeTransform {

  transform(value: string): string{
    return value.split('').reverse().join('');
  }

}
