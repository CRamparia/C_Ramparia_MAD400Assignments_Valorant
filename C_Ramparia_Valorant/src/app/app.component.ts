import { Component } from '@angular/core';
import { Valorant } from './helper-files/Valorant';
import { MessageService } from './services/message.service';
import { ValorantServiceService } from './services/valorant-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'C_Ramparia_Valorant';
  individualAgent?: Valorant;

  constructor(private agentServices: ValorantServiceService, private messageService: MessageService){
  }

  ngOnInit(): void{
    this.agentServices.getAgentItem(2).subscribe(
      agentAtItem => this.individualAgent = agentAtItem
    );
  }


  displayItem(id: string): void{
    if(!parseInt(id)){
      this.messageService.add("Please enter a number value");
      return;
    }
    let idNumber = parseInt(id);
    this.agentServices.getAgent().subscribe(agentArray => {
      let agentInArray = agentArray.find(individualAgent => individualAgent.id === idNumber);
      if (!agentInArray){
        this.messageService.add("Please enter a number value for a valid id");
      }else{
        this.individualAgent = agentInArray;
      }
    });
  }
}

