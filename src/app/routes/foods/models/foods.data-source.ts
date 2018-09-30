import { DataSource } from '@angular/cdk/table';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoreState } from '../../../store/store-index';
import { FoodType } from './../../../models/enums/food-type.enum';
import { Food } from './../../../models/food.model';
import { getFoodList } from './../../../store/selectors';

@Injectable()
export class FoodsDataSource extends DataSource<Food> {

    public connectVal: Observable<Food[]>;

    constructor(private store: Store<CoreState>) {
        super();
        this.setTypeFilter('all');
    }

    public setTypeFilter(type: FoodType | 'all'): void {
        console.log(type);
        if (type === 'all') {
            this.connectVal = this.store.select(getFoodList);
        } else {
            this.connectVal = this.store.select(getFoodList)
                .pipe(
                    map(val => val.filter(v => v.type === type))
                );
        }
    }

    public connect(): Observable<Food[]> {
        return this.connectVal;
    }

    public disconnect(): void { }

}
