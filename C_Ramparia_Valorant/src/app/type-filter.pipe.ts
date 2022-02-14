import { Pipe, PipeTransform } from '@angular/core';
import { Valorant } from './helper-files/Valorant';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(agents: Valorant[]): Valorant[] {
    return agents.filter(function (v){
        return v.type != null ? v.type.length != 0 : null;
    });
  }

}
