import { Pipe, PipeTransform } from '@angular/core';

interface Item {
  [key: string]: any;
}

@Pipe({
  name: 'filterArr',
})
export class FilterArrPipe implements PipeTransform {
  transform<T extends Item>(items: T[], itemProp: keyof T, term: string): T[] {
    // console.log('Filter Arr Pipe')
    const regExp = new RegExp(term, 'i');
    return items.filter((item) => regExp.test(item[itemProp]));
  }
}
