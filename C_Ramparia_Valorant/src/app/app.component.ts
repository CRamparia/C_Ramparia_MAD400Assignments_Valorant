import { Component } from '@angular/core';
import { Valorant } from './helper-files/Valorant';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'C_Ramparia_Valorant';
  valorantAgent: Valorant[] ;
  
  constructor(){
    this.valorantAgent = [{
      id: 0,
      title: "Chamber",
      description: "Well dressed and well armed, French weapon designer.",
      abilities: "Headhunter, Rendezvous, Treademark, Tour De Force",
      imgURL: "https://i.ytimg.com/vi/FUoqAn5T4h4/maxresdefault.jpg",
      type: "Sentinel" 
    }];
  }
}
