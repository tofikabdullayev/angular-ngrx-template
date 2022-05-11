import {Action, createReducer, on} from "@ngrx/store";
import {ConfigActions} from "./config.actions";

export interface ConfigState {
  appName: string;
  error?: any
}

export const initialState: ConfigState = {
  appName: 'Front end Template'
};

export const reducer = createReducer(
  initialState,
  on(ConfigActions.getConfig, (state) => ({
    ...state,
  })),
on(ConfigActions.getConfigComplete, (state, config) => ({
  ...state,
  ...config,
})),
  on(ConfigActions.getConfigError, (state) => ({
    ...state,
    error: { error: 'some error' },
  }))
);

export function reducerFactory(state: ConfigState | undefined, actions: Action) {
  return reducer(state, actions);
}
