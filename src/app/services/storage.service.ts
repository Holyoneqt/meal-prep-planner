import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { SetWeeks } from '../store/entities/weeks/week.actions';
import { Food } from './../models/food.model';
import { initialSettings, Settings } from './../models/settings.model';
import { Week } from './../models/week.model';
import { SetFoodList } from './../store/entities/foods/foods.actions';
import { SetSettings } from './../store/entities/settings/settings.actions';
import { getFoodList, getSettings, getWeeks } from './../store/selectors';
import { CoreState } from './../store/store-index';

@Injectable()
export class StorageService {

    private readonly userTokenKey = 'mpp-user-token';

    private readonly settingsKey = 'mpp-settings';
    private readonly foodsKey = 'mpp-foods';
    private readonly weeksKey = 'mpp-weeks';

    constructor(private store: Store<CoreState>) { }

    public syncLocalStorageWithStore() {
        const settingsFromStore = this.getSettings();
        const foodListFromStore = this.getFoodList();
        const weeksFromStore = this.getWeeks();

        this.store.dispatch(new SetSettings(settingsFromStore));
        this.store.dispatch(new SetFoodList(foodListFromStore));
        this.store.dispatch(new SetWeeks(weeksFromStore));

        this.store.select(getSettings).subscribe(newVal => this.saveSettings(newVal));
        this.store.select(getFoodList).subscribe(newVal => this.saveFoodList(newVal));
        this.store.select(getWeeks).subscribe(newVal => this.saveWeeks(newVal));
    }

    public getUserToken(): string {
        return localStorage.getItem(this.userTokenKey);
    }

    public setUserToken(token: string): void {
        localStorage.setItem(this.userTokenKey, token);
    }

    public removeUserToken(): void {
        localStorage.removeItem(this.userTokenKey);
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

    public getWeeks(): Week[] {
        const fromStorage = JSON.parse(localStorage.getItem(this.weeksKey));
        return (fromStorage) ? fromStorage : [];
    }

    public saveWeeks(weeks: Week[]): void {
        localStorage.setItem(this.weeksKey, JSON.stringify(weeks));
    }

}
