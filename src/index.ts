import { Cart, ICart } from "./models/cart.model";
import { IItem } from "./models/item.model";
import { IOwner } from "./models/owner.model";
import { CartPrinter } from "./services/cart-printer.service";
import { ReceiptPrinter } from "./services/receipt-printer.service";

let burrito: IItem = {
    name: "Burrito",
    price: 2.59,
    quantity: 2
}

let greenTea: IItem = {
    name: "Green Tea",
    price: 3,
    quantity: 5
}

let owner: IOwner = {
    firstName: 'Mason',
    lastName: 'Klein'
}

let cartPrinter: CartPrinter = new CartPrinter();
let receiptPrinter: ReceiptPrinter = new ReceiptPrinter();

let myCart: ICart = new Cart(owner);
myCart.addItem(burrito);
myCart.addItem(greenTea);

cartPrinter.printCart(myCart);
receiptPrinter.printReceipt(myCart);

