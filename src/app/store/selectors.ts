import { WeekState } from './objects/weeks/week.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { FoodsState } from './objects/foods/foods.state';
import { SettingsState } from './objects/settings/settings.state';
import { CoreState } from './store-index';

export const getSettingsState = createFeatureSelector<CoreState, SettingsState>('settings');
export const getSettings = createSelector(getSettingsState, (state: SettingsState) => state.settings);

export const getFoodsState = createFeatureSelector<CoreState, FoodsState>('foods');
export const getFoodList = createSelector(getFoodsState, (state: FoodsState) => state.foodList);

export const getWeekState = createFeatureSelector<CoreState, WeekState>('weeks');
export const getWeeks = createSelector(getWeekState, (state: WeekState) => state.weeks);
