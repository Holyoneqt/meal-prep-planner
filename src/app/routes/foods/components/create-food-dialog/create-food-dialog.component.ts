import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

import { FoodType } from './../../../../models/enums/food-type.enum';
import { Food, initialFood } from './../../../../models/food.model';

@Component({
    selector: 'app-create-food-dialog',
    templateUrl: 'create-food-dialog.component.html',
    styleUrls: [ 'create-food-dialog.component.css' ]
})
export class CreateFoodDialogComponent implements OnInit {

    public food: Food;
    public types: string[];

    constructor(public dialogRef: MatDialogRef<CreateFoodDialogComponent>,
        @Optional() @Inject(MAT_DIALOG_DATA) public data: Food) {}

    public ngOnInit(): void {
        this.food = { ...this.data } || initialFood;
        this.types = Object.keys(FoodType);
    }
    
    public submitForm(form): void {
        console.log(form.value);
        if (form.valid) {
            this.dialogRef.close(this.food);
        }
    }

    public cancelDialog(): void {
        this.dialogRef.close(undefined);
    }

}
