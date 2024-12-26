import { createAction, props } from '@ngrx/store';

export const addTodoAction = createAction(
  '[TODO_PAGE] add todo',
  props<{name: string}>()
);
