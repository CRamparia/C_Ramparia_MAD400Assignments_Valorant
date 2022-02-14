import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiTypeFilter'
})
export class MultiTypeFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
