import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestPipePipe } from './test-pipe.pipe';
import { TestDereictiveDirective } from './test-dereictive.directive';
import { ContentCardComponent } from './content-card/content-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestPipePipe,
    TestDereictiveDirective,
    ContentCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
