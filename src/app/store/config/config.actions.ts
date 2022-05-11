import { createAction, props } from '@ngrx/store';
import { ConfigState } from './config.reducer';
import {httpActionTypeGenerator} from "../../shared/actionTypeGenerator";

const getConfig = createAction(httpActionTypeGenerator('Config', 'get').start);
const getConfigComplete = createAction(
  httpActionTypeGenerator('Config', 'get').complete,
  props<{ users: ConfigState[] }>()
);
const getConfigError = createAction(httpActionTypeGenerator('Config', 'get').error);

export const ConfigActions = {
  getConfig,
  getConfigComplete,
  getConfigError,
};
