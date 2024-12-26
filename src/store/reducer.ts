import { Action, createReducer, on, State } from '@ngrx/store';
import { addTodoAction } from './actions';

interface Todo {
  name: string;
}

export interface TodoState {
  todoList: Todo[];
}

const initialTodoState: TodoState = {
  todoList: ["Buy milk", "Buy eggs", "Buy bread"].map((name) => ({ name })),
};

export const todoReducer = createReducer(
  initialTodoState,
  on(addTodoAction, (state, { name }) => ({
    ...state,
    todoList: [...state.todoList, { name }],
  }))
);
