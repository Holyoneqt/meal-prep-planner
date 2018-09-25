import { WeekActions, WeekActionTypes } from './week.actions';
import { initialWeekState, WeekState } from './week.state';

export function reducer(state: WeekState = initialWeekState, action: WeekActions): WeekState {
    switch (action.type) {
        case WeekActionTypes.SetWeeks:
            return {
                ...state,
                weeks: action.payload
            };

        case WeekActionTypes.AddWeek:
            return {
                ...state,
                weeks: [ ...state.weeks, action.payload ]
            };
        
        case WeekActionTypes.UpdateWeek:
            return {
                ...state,
                weeks: state.weeks.map(mapVal => {
                    if (mapVal.beginTime === action.payload.oldWeek.beginTime) {
                        return action.payload.updatedWeek;
                    } else {
                        return mapVal;
                    }
                })
            };
        
        case WeekActionTypes.DeleteWeek: 
            return {
                ...state,
                weeks: state.weeks.filter(filterVal => filterVal.beginTime !== action.payload.beginTime)
            };

        default: return state;

    }
}
