import { Injectable } from '@angular/core';
import ToDoItem from './definitions/todo-item';
import * as luxon from 'luxon';

@Injectable({
  providedIn: 'root'
})
export class TodoRepositoryService {
  public toDoItems: Array<ToDoItem>;  

  constructor() { 
    //this.toDoItems = new Array<ToDoItem>();
    this.toDoItems = [
        {text: "hello", completed: false, addedAt: 0}, 
        {text: "bye", completed: false, addedAt: 0}, 
        {text: "middle", completed: false, addedAt: 0}];
  }
}
