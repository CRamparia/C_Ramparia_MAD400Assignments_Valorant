import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import { VALORANTAGENTS } from '../helper-files/contentDb';
import { Valorant } from '../helper-files/Valorant';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const valorant: Valorant[] = VALORANTAGENTS;
    return {valorant};
  }
  genId(valorant: Valorant[]): number{
    return valorant.length > 0 ? Math.max(...valorant.map(c => c.id ?? 0)) + 1 : 0;
  }
}
