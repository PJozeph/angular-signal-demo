import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todo');


export const selectTodoList = createSelector(
    selectTodoState,
    (state) => state.todoList
  );
  