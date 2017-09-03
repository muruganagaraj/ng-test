import {
  Component,
  OnInit
} from "@angular/core";

import {
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";

// import { ToasterService } from 'angular2-toaster';

import {
  TodoService
} from "../services/todo-service";

type Todo = {
  todoInput: string;
  todoSelect: string;
  todoRadio: string;
  _id?: string;
};

type Type = {
  value: string;
}

@Component({
  selector: "todo-cmp",
  providers: [],
  templateUrl: "todo/templates/todo.html",
  styleUrls: ["todo/styles/todo.css"]
})
export class TodoCmp implements OnInit {
  title: string = "ng2do";
  todos: Todo[] = [];
  todoModel: Todo;
  types: Type[];

  // private toasterService: ToasterService;

  constructor(//toasterService: ToasterService,
    private _todoService: TodoService) {
    // this.toasterService = toasterService;

    this.todoModel = {
      "todoInput": "",
      "todoSelect": "",
      "todoRadio": ""
    };

    this.types = [{ value: "1" }, { value: "2" }, { value: "3" }, { value: "4" }, { value: "5" }];
  }

  ngOnInit() {
    this._getAll();
    // this.toasterService.pop('success', 'Args Title', 'Args Body');
  }

  private _getErrorState(todo: Todo): boolean {
    return !(todo.todoInput && todo.todoSelect && todo.todoRadio);
  }

  private _getAll(): void {
    // this._todoService
    //     .getAll()
    //     .subscribe((todos) => {
    //       this.todos = todos;
    //     });
  }

  add(todoData: Todo): void {
    // this._todoService
    //     .add(todoData.todoInput)
    //     .subscribe((m) => {
    //       this.todos.push(m);
    //       this.todoForm.todoInput = "";
    //     });
    console.log(todoData);
  }

  remove(id: string): void {
    this._todoService
      .remove(id)
      .subscribe(() => {
        this.todos.forEach((t, i) => {
          if (t._id === id)
            return this.todos.splice(i, 1);
        });
      });
  }
}
