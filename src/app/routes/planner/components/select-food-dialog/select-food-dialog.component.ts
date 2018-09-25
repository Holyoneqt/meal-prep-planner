import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Food } from './../../../../models/food.model';
import { WeekPlannerFood } from './../../../../models/week-planner-food.model';

@Component({
    selector: 'app-select-food-dialog',
    templateUrl: 'select-food-dialog.component.html',
    styleUrls: [ 'select-food-dialog.component.css' ]
})
export class SelectFoodDialogComponent {

    public food: Food;
    public amount: number;

    constructor(public dialogRef: MatDialogRef<SelectFoodDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: Food) {
        this.food = data;
        this.amount = 100;
    }

    public onAmountChange(value: number): void {
        this.amount = value;
    }

    public finishDialog(): void {
        const returnVal: WeekPlannerFood = {
            baseFood: this.food,
            amount: this.amount,
            totalCalories: (this.food.calories / 100) * this.amount,
            totalCarbs: (this.food.carbs / 100) * this.amount,
            totalProtein: (this.food.protein / 100) * this.amount,
            totalFat: (this.food.fat / 100) * this.amount,
        };

        this.dialogRef.close(returnVal);
    }

    public cancelDialog(): void {
        this.dialogRef.close(undefined);
    }

}
