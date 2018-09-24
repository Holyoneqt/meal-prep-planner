import { DataSource } from '@angular/cdk/table';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CoreState } from '../../../store/store-index';
import { Food } from './../../../models/food.model';
import { getFoodList } from './../../../store/selectors';

@Injectable()
export class FoodsDataSource extends DataSource<Food> {

    constructor(private store: Store<CoreState>) {
        super();
    }

    public connect(): Observable<Food[]> {
        return this.store.select(getFoodList);
    }

    public disconnect(): void {}

}
