import { Food } from './../../../models/food.model';

export interface FoodsState {
    foodList: Food[];
}

export const initialFoodsState: FoodsState = {
    foodList: []
};
