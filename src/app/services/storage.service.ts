import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Food } from './../models/food.model';
import { initialSettings, Settings } from './../models/settings.model';
import { SetFoodList } from './../store/objects/foods/foods.actions';
import { SetSettings } from './../store/objects/settings/settings.actions';
import { getFoodList, getSettings } from './../store/selectors';
import { CoreState } from './../store/store-index';

@Injectable()
export class StorageService {

    private readonly settingsKey = 'mpp-settings';
    private readonly foodsKey = 'mpp-foods';

    constructor(private store: Store<CoreState>) { }

    public syncLocalStorageWithStore() {
        const settingsFromStore = this.getSettings();
        const foodListFromStore = this.getFoodList();

        this.store.dispatch(new SetSettings(settingsFromStore));
        this.store.dispatch(new SetFoodList(foodListFromStore));

        this.store.select(getSettings).subscribe(newVal => this.saveSettings(newVal));
        this.store.select(getFoodList).subscribe(newVal => this.saveFoodList(newVal));
    }

    public getSettings(): Settings {
        const fromStorage = JSON.parse(localStorage.getItem(this.settingsKey));
        return (fromStorage) ? fromStorage : initialSettings;
    }

    public saveSettings(settings: Settings): void {
        localStorage.setItem(this.settingsKey, JSON.stringify(settings));
    }

    public getFoodList(): Food[] {
        const fromStorage = JSON.parse(localStorage.getItem(this.foodsKey));
        return (fromStorage) ? fromStorage : [];
    }

    public saveFoodList(foodList: Food[]): void {
        localStorage.setItem(this.foodsKey, JSON.stringify(foodList));
    }

}
