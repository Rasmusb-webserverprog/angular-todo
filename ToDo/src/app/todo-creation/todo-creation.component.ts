import { Component, OnInit } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import ToDoItem from '../definitions/todo-item';

@Component({
  selector: 'app-todo-creation',
  templateUrl: './todo-creation.component.html',
  styleUrls: ['./todo-creation.component.scss']
})
export class TodoCreationComponent implements OnInit {
  
  public description: string = "";
  private _toDoRepositoryService: TodoRepositoryService;

  constructor(toDoRepositoryService: TodoRepositoryService) { this._toDoRepositoryService = toDoRepositoryService; }

  ngOnInit(): void {
  }

  public AddItem(): void { 
    this._toDoRepositoryService.AddToDoItem(this.description);
    this.description = "";
  }

}
