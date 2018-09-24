import { Action } from '@ngrx/store';

import { Food } from './../../../models/food.model';

export enum FoodsActionTypes {
    SetFoodList = 'SET_FOOD_LIST',
    AddFood = 'ADD_FOOD',
    UpdateFood = 'UPDATE_FOOD',
    DeleteFood = 'DELETE_FOOD',
}

export class SetFoodList implements Action {
    readonly type = FoodsActionTypes.SetFoodList;
    constructor(public payload: Food[]) {}
}

export class AddFood implements Action {
    readonly type = FoodsActionTypes.AddFood;
    constructor(public payload: Food) {}
}

export class UpdateFood implements Action {
    readonly type = FoodsActionTypes.UpdateFood;
    constructor(public payload: { oldFood: Food, updatedFood: Food }) {}
}

export class DeleteFood implements Action {
    readonly type = FoodsActionTypes.DeleteFood;
    constructor(public payload: Food) {}
}

export type FoodsActions =
    SetFoodList | AddFood | UpdateFood | DeleteFood;
