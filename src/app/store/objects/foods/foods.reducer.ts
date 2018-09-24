import { FoodsActions, FoodsActionTypes } from './foods.actions';
import { FoodsState, initialFoodsState } from './foods.state';

export function reducer(state: FoodsState = initialFoodsState, action: FoodsActions): FoodsState {
    switch (action.type) {
        case FoodsActionTypes.SetFoodList:
            return {
                ...state,
                foodList: action.payload
            };

        case FoodsActionTypes.AddFood:
            return {
                ...state,
                foodList: [ ...state.foodList, action.payload ]
            };
        
        case FoodsActionTypes.UpdateFood:
            return {
                ...state,
                foodList: state.foodList.map(mapVal => {
                    if (mapVal.name === action.payload.oldFood.name) {
                        return action.payload.updatedFood;
                    } else {
                        return mapVal;
                    }
                })
            };
        
        case FoodsActionTypes.DeleteFood: 
            return {
                ...state,
                foodList: state.foodList.filter(filterVal => filterVal.name !== action.payload.name)
            };

        default: return state;

    }
}
