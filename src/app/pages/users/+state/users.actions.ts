import { createAction, props } from '@ngrx/store';
import { httpActionTypeGenerator } from 'src/app/shared/actionTypeGenerator';
import { UsersModel } from './users.model';

const getUsers = createAction(httpActionTypeGenerator('Users', 'get').start);
const getUsersComplete = createAction(
  httpActionTypeGenerator('Users', 'get').complete,
  props<{ users: UsersModel[] }>()
);
const getUsersError = createAction(httpActionTypeGenerator('Users', 'get').error);

export const UsersActions = {
  getUsers,
  getUsersComplete,
  getUsersError,
};
