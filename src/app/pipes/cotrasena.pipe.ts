import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cotrasena',
})
export class CotrasenaPipe implements PipeTransform {
  transform(value: string, mostrar: boolean = false): string {
    return mostrar ? '*'.repeat(value.length) : value;
  }
}
