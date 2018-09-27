import { Action } from '@ngrx/store';

import { Week } from './../../../models/week.model';

export enum WeekActionTypes {
    SetWeeks = 'SET_WEEKS',
    AddWeek = 'ADD_WEEK',
    UpdateWeek = 'UPDATE_WEEK',
    DeleteWeek = 'DELETE_WEEK',
}

export class SetWeeks implements Action {
    readonly type = WeekActionTypes.SetWeeks;
    constructor(public payload: Week[]) {}
}

export class AddWeek implements Action {
    readonly type = WeekActionTypes.AddWeek;
    constructor(public payload: Week) {}
}

export class UpdateWeek implements Action {
    readonly type = WeekActionTypes.UpdateWeek;
    constructor(public payload: { oldWeek: Week, updatedWeek: Week }) {}
}

export class DeleteWeek implements Action {
    readonly type = WeekActionTypes.DeleteWeek;
    constructor(public payload: Week) {}
}

export type WeekActions =
    SetWeeks | AddWeek | UpdateWeek | DeleteWeek;
