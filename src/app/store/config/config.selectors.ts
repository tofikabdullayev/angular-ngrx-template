import { createFeatureSelector, createSelector } from '@ngrx/store';
import {ConfigState} from './config.reducer';
import {FeaturesEnum} from "../features.enum";


export const config = createSelector(
  createFeatureSelector(FeaturesEnum.CONFIG),
  (state: ConfigState) => state
);

export const ConfigSelectors = {
  config
};
