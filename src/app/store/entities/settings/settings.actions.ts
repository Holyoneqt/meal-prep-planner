import { Action } from '@ngrx/store';

import { Settings } from './../../../models/settings.model';

export enum SettingsActionTypes {
    SetSettings = 'SET_SETTINGS',
}

export class SetSettings implements Action {
    readonly type = SettingsActionTypes.SetSettings;
    constructor(public payload: Settings) {}
}

export type SettingsActions =
    SetSettings;
