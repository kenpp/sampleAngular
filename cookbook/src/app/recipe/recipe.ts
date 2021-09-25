export class Recipe {
    id: number;
    name: string;
    minute: number;
    feature: string;
    manner: string;
    serve: number;
    ingre: {
        name: string,
        amount: string
    }[];
}