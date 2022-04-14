import { ICart } from "../models/cart.model";
import { IItem } from "../models/item.model";
import { IReceiptValues, ReceiptCalculator } from "./receipt-calculator.service";

export class ReceiptPrinter {

    receiptCalculator: ReceiptCalculator;
    COLS: number = 40;

    constructor() {
        this.receiptCalculator = new ReceiptCalculator();
    }

    public printReceipt = (cart: ICart) => {
        let header: string = 'Receipt';
        let headerPad: number = this.COLS / 2 + header.length / 2 + 1;

        let receiptValues: IReceiptValues = this.receiptCalculator.calculateReceiptValues(cart);

        console.log('='.repeat(this.COLS));
        console.log(header.padStart(headerPad, " "));
        console.log('-'.repeat(this.COLS));
        this._printItems(cart.items);
        console.log();
        this._printSubTotal(receiptValues.subtotal);
        this._printTax(receiptValues.tax);
        this._printTotal(receiptValues.total);
        console.log('='.repeat(this.COLS));
    }

    private _printItems = (items: IItem[]) => {
        items.forEach(item => {
            let name: string = item.name;
            let price: string = this.formatter.format(item.price);
            for (let i = 0; i < item.quantity; i++) {
                console.log(`${''.padStart(5, " ")}${name.padEnd(10, " ")}${price.padStart(15, " ")}`)
            }
        })
    }

    private _printSubTotal = (subtotal: number) => {
        let strSubTotal: string = this.formatter.format(subtotal);
        console.log(`${"SUBTOTAL".padStart(18, " ")}${strSubTotal.padStart(12, " ")}`);
    }

    private _printTax = (tax: number) => {
        let strTax: string = this.formatter.format(tax);
        console.log(`${"TAX".padStart(18, " ")}${strTax.padStart(12, " ")}`);
    }

    private _printTotal = (total: number) => {
        let strTotal: string = this.formatter.format(total);
        console.log(`${"TOTAL".padStart(18, " ")}${strTotal.padStart(12, " ")}`);
    }

    formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}