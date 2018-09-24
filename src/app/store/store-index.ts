import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

import { environment } from './../../environments/environment';
import * as foodsReducer from './objects/foods/foods.reducer';
import { FoodsState } from './objects/foods/foods.state';
import * as settingsReducer from './objects/settings/settings.reducer';
import { SettingsState } from './objects/settings/settings.state';

export interface CoreState {
    settings: SettingsState;
    foods: FoodsState;
}

export const indexReducers: ActionReducerMap<CoreState> = {
    settings: settingsReducer.reducer,
    foods: foodsReducer.reducer,
};

export function logger(reducer: ActionReducer<CoreState>): ActionReducer<CoreState> {
    return function(state: CoreState, action: any): CoreState {
        console.log(state, action);

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<CoreState>[] =
    !environment.production ? [ logger ] : [];
