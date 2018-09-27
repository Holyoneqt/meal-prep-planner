import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { convertFormFood, FormFood, initialFormFood } from './../../models/food.model';
import { AddFood } from './../../store/entities/foods/foods.actions';
import { CoreState } from './../../store/store-index';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public formFood: FormFood;

    constructor(private store: Store<CoreState>) { }

    public ngOnInit(): void {
        this.formFood = initialFormFood;
    }

    public submitForm(): void {
        const newFood = convertFormFood(this.formFood);
        this.store.dispatch(new AddFood(newFood));
    }

}
