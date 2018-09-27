import { Week } from './../../../models/week.model';

export interface WeekState {
    weeks: Week[];
}

export const initialWeekState: WeekState = {
    weeks: [],
};
