import { Component, Input, OnInit } from '@angular/core';
import { Valorant } from '../helper-files/Valorant';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  valorantAgents: Valorant[] ;
  constructor() { 
    
  
    this.valorantAgents = [{
      id: 0,
      title: "Chamber",
      description: "Well dressed and well armed, French weapon designer.",
      abilities: "Headhunter, Rendezvous, Treademark, Tour De Force",
      imgURL: "https://i.ytimg.com/vi/FUoqAn5T4h4/maxresdefault.jpg",
      type: "Sentinel" 
    },{
      id: 1,
      title: "Neon",
      description: "Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it.",
      abilities: "Relay Bolt, High Gear, Fast Lane, Overdrive",
      imgURL: "https://www.dexerto.com/wp-content/uploads/2022/01/10/valorant-neon-guide-abilities-how-to-play-tips-tricks.jpg",
      type: "Duelist" 
    },{
      id: 2,
      title: "Rage",
      description: "Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”",
      abilities: "Blast pack, Paint Shell, Boom Bot, Showstopper",
      imgURL: "https://d1lss44hh2trtw.cloudfront.net/assets/editorial/2021/01/raze-valorant.jpg",
      type: "Duelist" 
    }];


  }

  ngOnInit(): void {
  }

}
