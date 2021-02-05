import { Component, OnInit, Input } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import ToDoItem from '../definitions/todo-item';
import * as luxon from 'luxon';

@Component({
  selector: 'app-todo-creation',
  templateUrl: './todo-creation.component.html',
  styleUrls: ['./todo-creation.component.scss']
})
export class TodoCreationComponent implements OnInit {
  

  public description: string = "";

  @Input() 
  public ToDoList: Array<ToDoItem> | undefined;

  constructor() { }

  ngOnInit(): void { }

  public AddItem(): void { 
    if (this.ToDoList) {
      let timeAdded: luxon.DateTime = luxon.DateTime.local();
      this.ToDoList.push({text: this.description, completed: false, addedAt: timeAdded.toMillis()});
      console.log('Added: ${description}')
      this.description = "";
    }
  }

}
