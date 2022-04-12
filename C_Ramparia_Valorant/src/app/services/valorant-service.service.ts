import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VALORANTAGENTS } from '../helper-files/contentDb';
import { Valorant } from '../helper-files/Valorant';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ValorantServiceService {

  constructor(private messageService: MessageService) { }

  getAgent(): Observable<Valorant[]>{
    this.messageService.add("Content array loaded!")
    return of(VALORANTAGENTS);
  }

  getContentItem(id: number): Observable<Valorant>{
    this.messageService.add(`content Item at id: ${id}`);
    return of (VALORANTAGENTS[id]);
  }

}
