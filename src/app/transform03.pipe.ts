import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transform03',
    standalone: false
})
export class Transform03Pipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(x => {
      return x.president.toLowerCase().includes(searchText) || x.party.toLowerCase().includes(searchText) || x.took_office.toLowerCase().includes(searchText);
    });
  }

}
