export interface Settings {
    caloriesPerMeal: number;
    mealsPerDay: number;
    daysPerWeek: number;
    carbsPercent: number;
    proteinPercent: number;
    fatPercent: number;
}

export const initialSettings: Settings = {
    caloriesPerMeal: 0,
    mealsPerDay: 0,
    daysPerWeek: 0,
    carbsPercent: 0,
    proteinPercent: 0,
    fatPercent: 0
};
