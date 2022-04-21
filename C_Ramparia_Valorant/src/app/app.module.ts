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
import { ModifyContentComponentComponent, ModifyContentDialogComponent } from './modify-content-component/modify-content-component.component';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatBadgeModule } from '@angular/material/badge';
import {MatRippleModule} from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    MessagesComponentComponent,
    ModifyContentComponentComponent,
    ModifyContentDialogComponent
    
  ],
  exports:[
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{
      dataEncapsulation: false,
      delay: 2000,
    }),
    MatBadgeModule,
    MatCardModule,
    MatRippleModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    NoopAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class MaterialModule{}
