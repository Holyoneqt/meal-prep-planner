export interface Food {
    name: string;
    type: string;
    calories: number;
    carbs: number;
    sugar: number;
    fiber: number;
    protein: number;
    fat: number;
}

export const initialFood: Food = {
    name: '',
    type: '-',
    calories: 0,
    carbs: 0,
    sugar: 0,
    fiber: 0,
    protein: 0,
    fat: 0,
};

export interface FormFood {
    name: string;
    type: string;
    calories: string;
    carbs: string;
    sugar: string;
    fiber: string;
    protein: string;
    fat: string;
}

export const initialFormFood: FormFood = {
    name: '',
    type: '-',
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
            type: formFood.type,
            calories: parseFloat(formFood.calories),
            carbs: parseFloat(formFood.carbs),
            sugar: parseFloat(formFood.sugar),
            fiber: parseFloat(formFood.fiber),
            protein: parseFloat(formFood.protein),
            fat: parseFloat(formFood.fat)
        };
    } catch (e) {
        console.error(e);
        return undefined;
    }
}
