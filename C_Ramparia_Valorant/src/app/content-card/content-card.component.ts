import { Component, Input, OnInit } from '@angular/core';
import { Valorant } from '../helper-files/Valorant';




@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})


export class ContentCardComponent implements OnInit {

  @Input() valorantAgent?: Valorant;

 

  constructor() { }

  ngOnInit(): void {
    
  }

}
