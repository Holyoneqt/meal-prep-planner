import { initialSettings, Settings } from './../../../models/settings.model';

export interface SettingsState {
    settings: Settings;
}

export const initialFoodsState: SettingsState = {
    settings: initialSettings
};
