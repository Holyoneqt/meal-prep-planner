import { Component, OnInit } from '@angular/core';

import { FoodsService } from './../../services/foods.service';
import { FoodsDataSource } from './models/foods.data-source';

@Component({
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
  providers: [
      FoodsDataSource,
  ]
})
export class FoodsComponent implements OnInit {

    public displayedColumns: string[] = [ 'name', 'calories', 'carbs', 'protein', 'fat', 'actions' ];

    constructor(public foodsService: FoodsService, public dataSource: FoodsDataSource) { }

    public ngOnInit(): void { }

}
