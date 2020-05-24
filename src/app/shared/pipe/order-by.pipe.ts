import { Pipe, PipeTransform } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(data: any, column: string, order: boolean = true): any {
    if (!data || column === '') { return data; } // no array
    data.sort((a: any, b: any) => {
      if (column === 'name') {
        return a.key[column].localeCompare(b.key[column]);
      } else if (column === 'price') {
        return a.key[column] - b.key[column];
      } else {
        return a.value - b.value;
      }
    });
    data = order ? data : data.reverse();
    return data;
  }
}
