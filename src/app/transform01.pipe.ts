import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform01'
})
export class Transform01Pipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(x => {
      return x.toLocaleLowerCase().includes(searchText);
    });
  }

}
