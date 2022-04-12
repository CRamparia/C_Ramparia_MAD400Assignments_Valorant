import { Component, OnInit } from '@angular/core';
import { Valorant } from '../helper-files/Valorant';
import { ValorantServiceService } from '../services/valorant-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  valorantAgents: Valorant[];
  agentFound? : boolean;
  
  constructor(private valorantAgentService: ValorantServiceService) { 
    this.valorantAgents = [];
  }

    ngOnInit(): void {
    this.valorantAgentService.getAgent().subscribe(listofAgent => this.valorantAgents = listofAgent);
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
}
