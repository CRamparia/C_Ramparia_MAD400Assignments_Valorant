import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Valorant } from '../helper-files/Valorant';
import { ValorantServiceService } from '../services/valorant-service.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {

  newAgent: Valorant;
  temptags: string = "";
  tempid: string = "";
  
  @Output() newValorantEvent: EventEmitter<Valorant> = new EventEmitter<Valorant>();
  @Output() updateValorantEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private valorantService: ValorantServiceService) {
    this.newAgent = {title: '', description: '', abilities: ''};
   }

  ngOnInit(): void {
  }

  modifyOrAddItemToParent(): void{
    if(this.tempid !== ""){
      this.newAgent.tags = this.temptags ? this.temptags.split(","): [];
      this.newAgent.id = parseInt(this.tempid);

      this.valorantService.updateAgent(this.newAgent).subscribe(() => {
        this.updateValorantEvent.emit();
        this.newAgent = {
          id: 0,title: '', description: '', abilities: '', imgURL: '', type: '', tags: []
        };
        this.temptags = "";
        this.tempid = "";
      });
    }
    else{
      this.newAgent.tags = this.temptags ? this.temptags.split(","): [];

      this.valorantService.addAgent(this.newAgent).subscribe(newAgentFromServer => {
        this.newValorantEvent.emit(newAgentFromServer);
        this.newAgent = { title: '', description: '', abilities: '', imgURL: '', type: '', tags: []};
        this.temptags = "";
      })
    }
  }
}     
