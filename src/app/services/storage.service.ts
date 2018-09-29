import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { SetWeeks } from '../store/entities/weeks/week.actions';
import { Food } from './../models/food.model';
import { initialSettings, Settings } from './../models/settings.model';
import { Week } from './../models/week.model';
import { SetFoodList } from './../store/entities/foods/foods.actions';
import { SetSettings } from './../store/entities/settings/settings.actions';
import { getFoodList, getSettings, getWeeks } from './../store/selectors';
import { CoreState } from './../store/store-index';
import { DbService } from './db.service';

@Injectable()
export class StorageService {

    private readonly settingsKey = 'mpp-settings';
    private readonly foodsKey = 'mpp-foods';
    private readonly weeksKey = 'mpp-weeks';

    private user: firebase.User;

    constructor(private store: Store<CoreState>, private afAuth: AngularFireAuth, private db: DbService) {
        this.afAuth.authState.subscribe(u => this.user = u);
    }

    public syncLocalStorageWithStore() {
        const storedSettingsSub = this.getSettings().subscribe(s => this.store.dispatch(new SetSettings(s)));
        const storedFoodListSub = this.getFoodList().subscribe(fl => this.store.dispatch(new SetFoodList(fl)));
        const storedWeeksSub = this.getWeeks().subscribe(w => this.store.dispatch(new SetWeeks(w)));

        storedSettingsSub.unsubscribe();
        storedFoodListSub.unsubscribe();
        storedWeeksSub.unsubscribe();

        this.store.select(getSettings).subscribe(newVal => this.saveSettings(newVal));
        this.store.select(getFoodList).subscribe(newVal => this.saveFoodList(newVal));
        this.store.select(getWeeks).subscribe(newVal => this.saveWeeks(newVal));
    }

    public getSettings(): Observable<Settings> {
        if (this.user) {
            return this.db.getSettings();
        } else {
            const fromStorage = JSON.parse(localStorage.getItem(this.settingsKey));
            return of((fromStorage) ? fromStorage : initialSettings);
        }
    }

    public saveSettings(settings: Settings): void {
        this.user ? this.db.saveSettings(settings) : localStorage.setItem(this.settingsKey, JSON.stringify(settings));
    }

    public getFoodList(): Observable<Food[]> {
        if (this.user) {
            return this.db.getFoodList();
        } else {
            const fromStorage = JSON.parse(localStorage.getItem(this.foodsKey));
            return of((fromStorage) ? fromStorage : []);
        }
    }

    public saveFoodList(foodList: Food[]): void {
        this.user ? this.db.saveFoodList(foodList) : localStorage.setItem(this.foodsKey, JSON.stringify(foodList));
    }

    public getWeeks(): Observable<Week[]> {
        if (this.user) {
            return this.db.getWeeks();
        } else {
            const fromStorage = JSON.parse(localStorage.getItem(this.weeksKey));
            return of((fromStorage) ? fromStorage : []);
        }
    }

    public saveWeeks(weeks: Week[]): void {
        this.user ? this.db.saveWeeks(weeks) : localStorage.setItem(this.weeksKey, JSON.stringify(weeks));
    }

}
