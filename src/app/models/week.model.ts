import { WeekPlannerFood } from './week-planner-food.model';

export interface Week {
    beginTime: number;
    foods: WeekPlannerFood[];
}
