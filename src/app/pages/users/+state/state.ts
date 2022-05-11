import { UserModel } from '../../../models/user.model';

export interface UsersState {
  loading: boolean;
  users: UserModel[];
  error: any;
}

export const initialState: UsersState = {
  loading: false,
  users: [],
  error: null,
};
