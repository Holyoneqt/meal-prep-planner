import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { convertFormFood, FormFood, initialFormFood } from './../../../../models/food.model';

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
    
    public submitForm(form): void {
        if (form.valid) {
            const newFood = convertFormFood(this.formFood);
            this.dialogRef.close(newFood);
        }
    }

    public cancelDialog(): void {
        this.dialogRef.close(undefined);
    }

}
