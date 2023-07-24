import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform02'
})
export class Transform02Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
