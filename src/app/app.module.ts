import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DraggableComponent } from './draggable/draggable.component';
import {DndModule} from 'ngx-drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextBoxComponent } from './Controls/text-box/text-box.component';
@NgModule({
  declarations: [
    AppComponent,
    DraggableComponent,
    TextBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    DndModule
  ],
  entryComponents:[
    DraggableComponent,
    TextBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
