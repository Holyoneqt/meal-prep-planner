import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Store } from '@ngrx/store';
import * as moment from 'moment';
import { Subject } from 'rxjs';

import { CoreState } from '../../store/store-index';
import { Food } from './../../models/food.model';
import { WeekPlannerFood } from './../../models/week-planner-food.model';
import { getFoodList, getSettings } from './../../store/selectors';
import { SelectFoodDialogComponent } from './components/select-food-dialog/select-food-dialog.component';


@Component({
    templateUrl: './planner.component.html',
    styleUrls: ['./planner.component.css']
})
export class PlannerComponent implements OnInit {

    public weekIndex: number;
    public weekStart: string;
    public weekEnd: string;

    public weekGoals: any;
    public weekRemaining: any;

    public foodList: Food[];
    public selectedFoodsSubject: Subject<WeekPlannerFood>;
    public selectedFoods: WeekPlannerFood[] = [];

    constructor(private store: Store<CoreState>, private dialog: MatDialog) { }

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

        this.store.select(getFoodList).subscribe(foodList => this.foodList = foodList.sort((a, b) => a.name.localeCompare(b.name)));
        this.selectedFoodsSubject = new Subject();
        this.selectedFoodsSubject.subscribe(next => {
            this.selectedFoods.push(next);
            this.calculateWeekRemaining();
        });

        this.weekIndex = 0;
        this.calculateWeek();
        this.calculateWeekRemaining();
    }

    public changeWeekIndex(number: number): void {
        this.weekIndex += number;
        this.calculateWeek();
    }

    public isCurrentWeek(): boolean {
        return this.weekStart === moment().startOf('isoWeek').format('D. MMMM YYYY');
    }

    public selectFood(food: Food): void {
        const dialogRef = this.dialog.open(SelectFoodDialogComponent, {
            width: '25%',
            height: '35%',
            data: food
        });

        dialogRef.afterClosed().subscribe(returnVal => this.selectedFoodsSubject.next(returnVal));
    }

    private calculateWeek(): void {
        this.weekStart = moment().add(this.weekIndex, 'week').startOf('isoWeek').format('D. MMMM YYYY');
        this.weekEnd = moment().add(this.weekIndex, 'week').endOf('isoWeek').format('D. MMMM YYYY');
    }

    private calculateWeekRemaining(): void {
        this.weekRemaining = {
            calories: this.weekGoals.totalCalories - this.sum('totalCalories'),
            carbs: this.weekGoals.totalCarbs - this.sum('totalCarbs'),
            protein: this.weekGoals.totalProtein - this.sum('totalProtein'),
            fat: this.weekGoals.totalFat - this.sum('totalFat'),
        };
    }

    private sum(key: string): number {
        let sum = 0;
        this.selectedFoods.forEach(food => sum += food[key]);
        return sum;
    }

}
