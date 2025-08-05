import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(
    items: any[],
    field: string,
    direction: 'asc' | 'desc' = 'asc'
  ): any[] {
    if (!items || !field) return items;
    return items.sort((a, b) => {
      const valA = a[field];
      const valB = b[field];
      if (valA == null || valB == null) return 0;
      const diff = valA - valB;
      return direction === 'asc' ? diff : -diff;
    });
  }

}
