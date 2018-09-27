import { FormFood, initialFormFood, convertFormFood } from './../../../../models/food.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { Food } from '../../../../models/food.model';
import { WeekPlannerFood } from '../../../../models/week-planner-food.model';

@Component({
    selector: 'app-create-food-dialog',
    templateUrl: 'create-food-dialog.component.html',
    styleUrls: [ 'create-food-dialog.component.css' ]
})
export class CreateFoodDialogComponent implements OnInit {

    public formFood: FormFood;

    constructor(public dialogRef: MatDialogRef<CreateFoodDialogComponent>) {}

    public ngOnInit(): void {
        this.formFood = initialFormFood;
    }
    
    public submitForm(): void {
        const newFood = convertFormFood(this.formFood);
        this.dialogRef.close(newFood);
    }

    public cancelDialog(): void {
        this.dialogRef.close(undefined);
    }

}
