import { ActionReducerMap } from '@ngrx/store';
import { ConfigState, reducerFactory } from './config.reducer';

export interface State {
  config: ConfigState;
}

export const reducers: ActionReducerMap<State> = {
  config: reducerFactory
};
