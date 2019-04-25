import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AgregarTodoAction } from '../todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as fromTodo from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput = new FormControl('', Validators.required);

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  agregarTodo() {
    if ( this.txtInput.invalid ) { return; }

    const accion = new fromTodo.AgregarTodoAction( this.txtInput.value );
    this.store.dispatch( accion );

    this.txtInput.reset();
  }

}
