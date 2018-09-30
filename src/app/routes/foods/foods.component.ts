import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CoreState } from '../../store/store-index';
import { FoodType } from './../../models/enums/food-type.enum';
import { Food } from './../../models/food.model';
import { FoodsService } from './../../services/foods.service';
import { AddFood, UpdateFood } from './../../store/entities/foods/foods.actions';
import { CreateFoodDialogComponent } from './components/create-food-dialog/create-food-dialog.component';
import { FoodsDataSource } from './models/foods.data-source';

@Component({
    templateUrl: './foods.component.html',
    styleUrls: ['./foods.component.css'],
    providers: [
        FoodsDataSource,
    ]
})
export class FoodsComponent implements OnInit {

    public types: string[];
    public displayedColumns: string[] = ['name', 'calories', 'carbs', 'protein', 'fat', 'actions'];
    public tableData: Observable<Food[]>;

    constructor(private store: Store<CoreState>, public foodsService: FoodsService, public dataSource: FoodsDataSource, private dialog: MatDialog) { }

    public ngOnInit(): void {
        this.types = Object.keys(FoodType);
        this.tableData = this.dataSource.connect();
    }

    public editFood(food: Food): void {
        const foodRef = { ...food };
        const dialogRef = this.createDialog({ ...food });

        dialogRef.afterClosed().subscribe(newFood => {
            if (newFood) {
                this.store.dispatch(new UpdateFood({ oldFood: foodRef, updatedFood: newFood }));
            }
        });
    }

    public createNewFood(): void {
        const dialogRef = this.createDialog();

        dialogRef.afterClosed().subscribe(newFood => {
            if (newFood) {
                this.store.dispatch(new AddFood(newFood));
            }
        });
    }

    public filterChange(val: FoodType): void {
        this.dataSource.setTypeFilter(val);
        this.tableData = this.dataSource.connect();
    }

    private createDialog(data?: Food): MatDialogRef<CreateFoodDialogComponent, any> {
        return this.dialog.open(CreateFoodDialogComponent, {
            width: '25%',
            height: '75%',
            disableClose: true,
            data: data,
        });
    }

}
