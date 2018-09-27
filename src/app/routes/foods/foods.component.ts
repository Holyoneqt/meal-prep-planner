import { AddFood } from './../../store/objects/foods/foods.actions';
import { Store } from '@ngrx/store';
import { CreateFoodDialogComponent } from './components/create-food-dialog/create-food-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FoodsService } from './../../services/foods.service';
import { FoodsDataSource } from './models/foods.data-source';
import { CoreState } from '../../store/store-index';

@Component({
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers: [
      FoodsDataSource,
  ]
})
export class FoodsComponent implements OnInit {

    public displayedColumns: string[] = [ 'name', 'calories', 'carbs', 'protein', 'fat', 'actions' ];

    constructor(private store: Store<CoreState>, public foodsService: FoodsService, public dataSource: FoodsDataSource, private dialog: MatDialog) { }

    public ngOnInit(): void { }

    public createNewFood(): void {
        const dialogRef = this.dialog.open(CreateFoodDialogComponent, {
            width: '25%',
            height: '70%',
            disableClose: true,
        });

        dialogRef.afterClosed().subscribe(newFood => {
            if (newFood) {
                this.store.dispatch(new AddFood(newFood));
            }
        });
    }

}
