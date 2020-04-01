import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ToDoItemComponent } from './component/to-do-item/to-do-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    ToDoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }