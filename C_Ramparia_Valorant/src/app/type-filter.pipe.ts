import { Pipe, PipeTransform } from '@angular/core';
import { Valorant } from './helper-files/Valorant';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(agents: Valorant[], agent?: string) {

      return agents.filter(Valorant => Valorant.type == agent ? agents : null);
      
  }

}
