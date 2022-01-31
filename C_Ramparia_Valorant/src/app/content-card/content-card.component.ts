import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  public ContentInstance = new ContentList();

  public mockData: Content = {
    id: 1,
    title: 'valo',
    description: "abcd",
    creator: "me",
    imgURL: "https://cdn.pocket-lint.com/r/s/970x/assets/images/152432-games-feature-what-is-valorant-a-guide-to-the-free-to-play-fps-with-tips-on-how-to-win-image3-muha6tfgev.jpg",
    type: "game"
  }
  constructor() { }

  ngOnInit(): void {
    this.ContentInstance.addContent(this.mockData);
  }

  onClick(){
    this.ngOnInit();
    this.ContentInstance.takeInput(0);
  }
}
