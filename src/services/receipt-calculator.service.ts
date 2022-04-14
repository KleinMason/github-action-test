import { ICart } from "../models/cart.model";

export interface IReceiptValues {
    subtotal: number,
    tax: number,
    total: number,
}

export class ReceiptCalculator {
    TAX: number = 0.04225;

    calculateSubTotal = (cart: ICart): number => {
        let subTotal: number = cart.items.map(item => {
            return item.quantity * item.price;
        }).reduce((t, c) => t + c);
        return subTotal;
    }

    calculateTotal = (cart: ICart): number => {
        let subtotal = this.calculateSubTotal(cart);
        let tax = subtotal * this.TAX;
        let total = subtotal + tax;
        return total;

    }

    calculateReceiptValues = (cart: ICart): IReceiptValues => {
        let subtotal = this.calculateSubTotal(cart);
        let tax = subtotal * this.TAX;
        let total = subtotal + tax;
        return {subtotal, tax, total}
    }
}