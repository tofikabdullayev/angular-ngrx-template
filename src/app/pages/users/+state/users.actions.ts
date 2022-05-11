import { createAction, props } from '@ngrx/store';
import { actionTypeGenerator } from 'src/app/shared/actionTypeGenerator';
import { UsersModel } from './users.model';

const getUsers = createAction(actionTypeGenerator('Users', 'get').start);
const getUsersComplete = createAction(
  actionTypeGenerator('Users', 'get').complete,
  props<{ users: UsersModel[] }>()
);
const getUsersError = createAction(actionTypeGenerator('Users', 'get').error);

export const UsersActions = {
  getUsers,
  getUsersComplete,
  getUsersError,
};
