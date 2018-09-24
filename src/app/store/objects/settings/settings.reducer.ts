import { SettingsActions, SettingsActionTypes } from './settings.actions';
import { initialFoodsState, SettingsState } from './settings.state';

export function reducer(state: SettingsState = initialFoodsState, action: SettingsActions): SettingsState {
    switch (action.type) {
        case SettingsActionTypes.SetSettings:
            return {
                ...state,
                settings: action.payload
            };

        default: return state;

    }
}
