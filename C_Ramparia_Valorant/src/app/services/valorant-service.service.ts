import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VALORANTAGENTS } from '../helper-files/contentDb';
import { Valorant } from '../helper-files/Valorant';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValorantServiceService {
  private httpOptions = {
    headers: new HttpHeaders({'Agent-type': 'application/json'})
  };

  constructor(private messageService: MessageService, private http: HttpClient) { }

  getAgent(): Observable<Valorant[]>{
    this.messageService.add("Content array loaded!")
    return this.http.get<Valorant[]>("api/valorant");
  }

  getAgentItem(id: number): Observable<Valorant>{
    this.messageService.add(`content Item at id: ${id}`);
    return this.http.get<Valorant>("api/valorant/" + id);
  }

  addAgent(newValorantItem: Valorant): Observable<Valorant>{
    this.messageService.add("Adding new Agent to the Server!");
    return this.http.post<Valorant>("api/valorant", newValorantItem, this.httpOptions);
  }

  updateAgent(valorantItem: Valorant): Observable<any>{
    this.messageService.add("Updating content on the server, id: " + valorantItem.id);
    return this.http.put("api/valorant", valorantItem, this.httpOptions);
  }

}
