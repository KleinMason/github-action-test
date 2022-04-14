export interface IItem {
    name: string,
    price: number,
    quantity: number,
}

export class Item implements IItem {
    name: string;
    price: number;
    quantity: number;

    constructor(name: string, price: number, quantity: number) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}