import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

import { Food } from './../models/food.model';
import { AddFood, DeleteFood } from './../store/objects/foods/foods.actions';
import { CoreState } from './../store/store-index';
import { StorageService } from './storage.service';

@Injectable()
export class FoodsService {

    private foodList: Food[];

    private foodsChangeSubscription: Subscription;

    constructor(private store: Store<CoreState>, private storageService: StorageService) {
        
    }

    public addFood(food: Food): void {
        this.store.dispatch(new AddFood(food));
    }

    public deleteFood(food: Food): void {
        this.store.dispatch(new DeleteFood(food));
    }

}
