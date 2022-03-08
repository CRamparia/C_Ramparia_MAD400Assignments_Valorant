import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Valorant } from '../helper-files/Valorant';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newAgentEvent: EventEmitter<Valorant> = new EventEmitter<Valorant>();
  newAgent?: Valorant;
  constructor() { }

  ngOnInit(): void {
    
  }

  addAgent(id: string, title: string, description: string, abilities: string, image: string, type: string, tags: string): void{
    this.newAgent = {
      id: parseInt(id),
      title: title,
      description: description,
      abilities: abilities,
      imgURL: image,
      type: type,
      tags: tags.split(",")
    };
    this.newAgentEvent.emit(this.newAgent);
    console.log("Content Added.");
  }

}
