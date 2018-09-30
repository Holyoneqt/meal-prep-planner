import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { FoodType } from './../models/enums/food-type.enum';
import { Food } from './../models/food.model';
import { AddFood, DeleteFood } from './../store/entities/foods/foods.actions';
import { getFoodList } from './../store/selectors';
import { CoreState } from './../store/store-index';
import { StorageService } from './storage.service';

@Injectable()
export class FoodsService {

    private foodList: Food[];

    constructor(private store: Store<CoreState>, private storageService: StorageService) {
        this.store.select(getFoodList).subscribe(fl => this.foodList = fl);
    }

    public addFood(food: Food): void {
        this.store.dispatch(new AddFood(food));
    }

    public deleteFood(food: Food): void {
        this.store.dispatch(new DeleteFood(food));
    }

    public getFoodsOfType(type: FoodType): Food[] {
        return this.foodList.filter(f => f.type === type);
    }

}
