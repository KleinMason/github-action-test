import { ICart } from "../models/cart.model";

export class CartPrinter {

    printCart = (cart: ICart): Promise<void> => {
        let numDashes: number = cart.owner.firstName.length + cart.owner.lastName.length + 8;
        let header: string =
            `${cart.owner.firstName} ${cart.owner.lastName}'s cart` + '\n' +
            '-'.repeat(numDashes) + '\n';
        let itemStrings: string[] = [];
        cart.items.forEach(item => {
            let itemString: string =
                `Item: ${item.name}` + '\n' +
                `    Price: ${this.formatter.format(item.price)}` + '\n' +
                `    Quantity: ${item.quantity}` + '\n';
            itemStrings.push(itemString);
        });
        let output: string = header + itemStrings.join('');
        console.log(output);
        return Promise.resolve();
    }

    formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2
    });
}

