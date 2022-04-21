import { Component, OnInit } from '@angular/core';
import { Valorant } from '../helper-files/Valorant';
import { ValorantServiceService } from '../services/valorant-service.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  valorantAgents: Valorant[];
  agentFound? : boolean;
  
  constructor(private valorantAgentService: ValorantServiceService, private messageService: MessageService) { 
    this.valorantAgents = [];
  }

    ngOnInit(): void {
    this.valorantAgentService.getAgent().subscribe(listofAgent =>
       this.valorantAgents = listofAgent);
       this.messageService.add("List Loaded Successfully");
  }


  SearchContent(search : String): void{
    if(this.valorantAgents.some(d => d.title === search)){
      this.agentFound = true;
    }else{
      this.agentFound = false;
    }
    
    if(this.valorantAgents.filter(d => d.title === search).length){
      this.agentFound = true;
    }else{
      this.agentFound = false;
    }

  }

  addValorantToList(newAgent: Valorant): void{
    this.messageService.add("New content added and sent to list, id number is " + newAgent.id)
    this.valorantAgentService.getAgent().subscribe(listOfAgents => {
      this.valorantAgents = listOfAgents;
      this.messageService.add("New content added and display on the list!");
    });
  }

  updateValorantToList(): void{
    this.valorantAgentService.getAgent().subscribe(listOfAgents => {
      this.valorantAgents = listOfAgents;
      this.messageService.add("Content on the list Updated");
    });
  }
  

}
