import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as moment from 'moment';

import { Week } from '../models/week.model';
import { AddWeek, UpdateWeek, WeekActions } from './../store/entities/weeks/week.actions';
import { getWeeks } from './../store/selectors';
import { CoreState } from './../store/store-index';

@Injectable()
export class WeekService {

    public weeks: Week[] = [];

    constructor(private store: Store<CoreState>) {
        this.store.select(getWeeks).subscribe(weeks => this.weeks = weeks);
    }

    public getWeek(beginTime: number): Week {
        return this.weeks.find(weekFind => weekFind.beginTime === beginTime) || undefined;
    }

    /**
     * Returns the start and end date of the Week with the given index
     * @param index 0 = current Week, 1 = next week, -1 = past week, etc.
     */
    public getWeekDates(index: number): { begin: string, end: string} {
        return {
            begin: moment().add(index, 'week').startOf('isoWeek').format('D. MMMM YYYY'),
            end: moment().add(index, 'week').endOf('isoWeek').format('D. MMMM YYYY'),
        };
    }

    public saveWeek(week: Week): void {
        let action: WeekActions = new AddWeek(week);
        this.weeks.forEach(weekVal => {
            if (weekVal.beginTime === week.beginTime) {
                action = new UpdateWeek(week);
            }
        });

        this.store.dispatch(action);
    }

}
