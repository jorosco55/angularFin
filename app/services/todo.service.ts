import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';


@Injectable()
  export class TodoService {

    private todos: Todo[];
    private nextId: number;

    constructor() {
      this.todos = [
        new Todo(0, 'Prepare for Greatness'),
        new Todo(1, 'Pass Angular class'),
        new Todo(2, 'Join the Rebel Alliance')
      ];

      this.nextId = 3;
    }

    public addTodo(text: string): void {
      const todo = new Todo(this.nextId, text);
      this.todos.push(todo);
      this.nextId++;
    }

    public getTodos(): Todo[] {
      return this.todos;
    }

    public removeTodo(id: number): void {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    }
  }



