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
      {text: "Cut Grass", completed: false, addedAt: 0}, 
      {text: "Read Books", completed: false, addedAt: 0}, 
      {text: "Eat hummus!!!", completed: false, addedAt: 0}];
  }

  public AddToDoItem(decription: string): void {
    let timeAdded: luxon.DateTime = luxon.DateTime.local();
    this.toDoItems.push({text: decription, completed: false, addedAt: timeAdded.toMillis()});
  }

  ngOnInit(): void {
  }

  public RemoveItem(description: string): void {
    this.toDoItems = this.toDoItems.filter(c => c.text !== description);
  }

  public RemoveAll(): void {
    this.toDoItems = new Array<ToDoItem>();
  }

}
