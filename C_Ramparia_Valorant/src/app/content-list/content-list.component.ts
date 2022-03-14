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
    
  
    
    
  }
  
  SearchContent(search : String): String{
      var reply = "no";
      if(search.length == 0){
        reply = 'null';
      }
      for(var player of this.valorantAgents){
        if(player.title.toUpperCase() === search.toUpperCase()){
          reply = "yes";
        }
      }
      return reply;
    }


  ngOnInit(): void {
  }

}
