export interface Food {
    name: string;
    calories: number;
    carbs: number;
    sugar: number;
    fiber: number;
    protein: number;
    fat: number;
}

export const initialFood: Food = {
    name: '',
    calories: 0,
    carbs: 0,
    sugar: 0,
    fiber: 0,
    protein: 0,
    fat: 0,
};

export interface FormFood {
    name: string;
    calories: string;
    carbs: string;
    sugar: string;
    fiber: string;
    protein: string;
    fat: string;
}

export const initialFormFood: FormFood = {
    name: '',
    calories: '',
    carbs: '',
    sugar: '',
    fiber: '',
    protein: '',
    fat: '',
};

export function convertFormFood(formFood: FormFood): Food {
    try {
        return {
            name: formFood.name,
            calories: parseInt(formFood.calories, 10),
            carbs: parseInt(formFood.carbs, 10),
            sugar: parseInt(formFood.sugar, 10),
            fiber: parseInt(formFood.fiber, 10),
            protein: parseInt(formFood.protein, 10),
            fat: parseInt(formFood.fat, 10)
        };
    } catch (e) {
        console.error(e);
        return undefined;
    }
}
