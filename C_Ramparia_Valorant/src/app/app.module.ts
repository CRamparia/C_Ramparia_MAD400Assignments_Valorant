import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestPipePipe } from './test-pipe.pipe';
import { TestDereictiveDirective } from './test-dereictive.directive';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { TypeFilterPipe } from './type-filter.pipe';
import { MultiTypeFilterPipe } from './multi-type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponentComponent } from './messages-component/messages-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestPipePipe,
    TestDereictiveDirective,
    ContentCardComponent,
    ContentListComponent,
    TypeFilterPipe,
    MultiTypeFilterPipe,
    HoverAffectDirective,
    MessagesComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
