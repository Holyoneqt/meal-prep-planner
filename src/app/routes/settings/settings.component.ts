import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { CoreState } from '../../store/store-index';
import { initialSettings, Settings } from './../../models/settings.model';
import { StorageService } from './../../services/storage.service';
import { SetSettings } from './../../store/entities/settings/settings.actions';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    public settings: Settings = initialSettings;

    constructor(private store: Store<CoreState>, private storage: StorageService) { }

    public ngOnInit(): void {
        this.storage.getSettings().subscribe(s => this.settings = s);
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
