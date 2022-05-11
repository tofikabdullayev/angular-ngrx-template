import { Action, createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { UsersModel } from './users.model';

export interface State {
  loading: boolean;
  users: UsersModel[];
  error: any;
}

export const initialState: State = {
  loading: false,
  users: [],
  error: null,
};

export const reducer = createReducer(
  initialState,
  on(UsersActions.getUsers, (state) => ({
    ...state,
    loading: true,
  })),
  on(UsersActions.getUsersComplete, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(UsersActions.getUsersComplete, (state) => ({
    ...state,
    loading: false,
    error: { error: 'some error' },
  }))
);

export function reducerFactory(state: State | undefined, actions: Action) {
  return reducer(state, actions);
}
