import { Component, OnInit } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import ToDoItem from '../definitions/todo-item';
import * as luxon from 'luxon';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  public toDoItems: Array<ToDoItem>;  


  constructor() { 
    //this.toDoItems = new Array<ToDoItem>();
    this.toDoItems = [
      {text: "hello", completed: false, addedAt: 0}, 
      {text: "bye", completed: false, addedAt: 0}, 
      {text: "middle", completed: false, addedAt: 0}];
  }

  public AddToDoItem(decription: string): void {
    let timeAdded: luxon.DateTime = luxon.DateTime.local();
    this.toDoItems.push({text: decription, completed: false, addedAt: timeAdded.toMillis()});
  }

  ngOnInit(): void {
  }

  public RemoveItem(description: string) {
    for (let search = 0; search < this.toDoItems.length; search++) {
      if (this.toDoItems[search].text === description) {
        this.toDoItems.splice(search);
        break;
      }
    }
  }

}
