import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CoreState } from '../../store/store-index';
import { Settings } from './../../models/settings.model';
import { SetSettings } from './../../store/objects/settings/settings.actions';
import { getSettings } from './../../store/selectors';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    public settings: Settings;

    constructor(private store: Store<CoreState>) { }

    public ngOnInit(): void {
        this.store.select(getSettings).subscribe(settingsVal => this.settings = settingsVal);
    }

    public submitForm(fromForm: Settings): void {
        this.store.dispatch(new SetSettings(fromForm));
    }

    public getSettingsSummary(): any {
        return {
            mealsPerWeek: this.settings.mealsPerDay * this.settings.daysPerWeek,
            carbsPerMeal: Math.round((this.settings.caloriesPerMeal * (this.settings.carbsPercent / 100)) / 4),
            proteinPerMeal: Math.round((this.settings.caloriesPerMeal * (this.settings.proteinPercent / 100)) / 4),
            fatPerMeal: Math.round((this.settings.caloriesPerMeal * (this.settings.fatPercent / 100)) / 9),
        };
    }

}
