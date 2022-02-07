import { Component, Input, OnInit } from '@angular/core';
import { Valorant } from '../helper-files/Valorant';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() valorantAgent? : Valorant[];

  constructor() { }

  ngOnInit(): void {
  }

}
