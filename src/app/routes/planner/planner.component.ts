import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { CoreState } from '../../store/store-index';
import { Food } from './../../models/food.model';
import { getFoodList, getSettings } from './../../store/selectors';


@Component({
    templateUrl: './planner.component.html',
    styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

    public weekIndex: number;
    public weekStart: string;
    public weekEnd: string;

    public weekGoals: any;
    public foodList: Food[];

    constructor(private store: Store<CoreState>) { }

    public ngOnInit(): void {
        this.store.select(getSettings).subscribe(settings => {
            const totalMeals = settings.daysPerWeek * settings.mealsPerDay;
            this.weekGoals = {
                totalCalories: totalMeals * settings.caloriesPerMeal,
                totalCarbs: totalMeals * Math.round((settings.caloriesPerMeal * (settings.carbsPercent / 100)) / 4),
                totalProtein: totalMeals * Math.round((settings.caloriesPerMeal * (settings.proteinPercent / 100)) / 4),
                totalFat: totalMeals * Math.round((settings.caloriesPerMeal * (settings.fatPercent / 100)) / 9)
            };
        });

        this.store.select(getFoodList).subscribe(foodList => this.foodList = foodList);

        this.weekIndex = 0;
        this.calculateWeek();
    }

    public changeWeekIndex(number: number): void {
        this.weekIndex += number;
        this.calculateWeek();
    }

    public isCurrentWeek(): boolean {
        return this.weekStart === moment().startOf('isoWeek').format('D. MMMM YYYY');
    }

    private calculateWeek() {
        this.weekStart = moment().add(this.weekIndex, 'week').startOf('isoWeek').format('D. MMMM YYYY');
        this.weekEnd = moment().add(this.weekIndex, 'week').endOf('isoWeek').format('D. MMMM YYYY');
    }

}
