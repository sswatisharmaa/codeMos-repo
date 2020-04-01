import { Component, OnInit } from '@angular/core';
import {ToDoBean} from '../../models/ToDoBean';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  toDoList: ToDoBean[];
  constructor() { }

  ngOnInit(): void {
    this.toDoList = [{
      id: 1,
      title: 'Angular crash course',
      completed: false
    }, {
      id: 2,
      title: 'How Docker works',
      completed: true
    },
    {
      id: 3,
      title: 'Commit on GIT',
      completed: false
    }];
  }

}
