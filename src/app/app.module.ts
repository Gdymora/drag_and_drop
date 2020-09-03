import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropComponent } from './components/drop/drop.component';

@NgModule({
  declarations: [
    AppComponent,   
    DropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
