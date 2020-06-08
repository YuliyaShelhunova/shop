import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {

  transform(value: any): any {
    const keys = [];
    // tslint:disable-next-line:forin
    for (const enumMember in value) {
      keys.push({key: enumMember, value: value[enumMember]});
    }
    return keys;
  }
}
