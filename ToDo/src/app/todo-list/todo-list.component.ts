import { Component, OnInit } from '@angular/core';
import { TodoRepositoryService } from '../todo-repository.service';
import ToDoItem from '../definitions/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  private _toDoRepository: TodoRepositoryService;
  public ToDoList: Array<ToDoItem> | undefined;

  constructor(toDoRepository: TodoRepositoryService) { 
    this._toDoRepository = toDoRepository;
  }



  ngOnInit(): void {
    this.ToDoList = this._toDoRepository.toDoItems;
  }

}
