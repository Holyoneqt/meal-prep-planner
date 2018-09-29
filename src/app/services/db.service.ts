import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

import { Food } from './../models/food.model';
import { initialSettings, Settings } from './../models/settings.model';
import { Week } from './../models/week.model';

@Injectable()
export class DbService {

    private userPath: string;
    private settingsPath: string;
    private weeksPath: string;
    private foodsPath: string;

    private settings$: Observable<Settings>;
    private foods$: Observable<Food[]>;
    private weeks$: Observable<Week[]>;

    constructor(private auth: AngularFireAuth, private db: AngularFireDatabase) {}

    public load(): void {
        this.auth.authState.subscribe(user => {
            if (user) {
                this.userPath = `/users/${user.uid}`;
                this.settingsPath = `/${this.userPath}/settings`;
                this.weeksPath = `/${this.userPath}/weeks`;
                this.foodsPath = `/${this.userPath}/foods`;
                
                this.settings$ = this.db.object<Settings>(this.settingsPath).valueChanges();
                this.foods$ = this.db.object<Food[]>(this.foodsPath).valueChanges();
                this.weeks$ = this.db.object<Week[]>(this.weeksPath).valueChanges();
            }
        });
    }

    public getSettings(): Observable<Settings> {
        return this.settings$;
    }

    public saveSettings(settings: Settings): void {
        this.db.object(this.settingsPath).set(settings || initialSettings);
    }

    public getFoodList(): Observable<Food[]> {
        return this.foods$;
    }

    public saveFoodList(foodList: Food[]) {
        this.db.object(this.foodsPath).set(foodList || []);
    }

    public getWeeks(): Observable<Week[]> {
        return this.weeks$;
    }

    public saveWeeks(weeks: Week[]) {
        this.db.object(this.weeksPath).set(weeks || []);
    }

}
