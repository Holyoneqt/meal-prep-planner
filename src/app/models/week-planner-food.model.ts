import { Food } from './food.model';

export interface WeekPlannerFood {
    baseFood: Food;
    amount: number;
    totalCalories: number;
    totalCarbs: number;
    totalProtein: number;
    totalFat: number;
}
