import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'transform02',
    standalone: false
})
export class Transform02Pipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(x => {
      return x.name.toLowerCase().includes(searchText) || x.username.toLowerCase().includes(searchText) || x.email.toLowerCase().includes(searchText);
    });
  }

}
