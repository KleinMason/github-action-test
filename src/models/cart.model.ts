import { IItem } from "./item.model";
import { IOwner } from "./owner.model";

export interface ICart {
    owner: IOwner;
    items: IItem[];
    addItem: (item: IItem) => Promise<void>;
}

export class Cart implements ICart {
    owner: IOwner;
    items: IItem[];

    constructor(owner: IOwner, items?: IItem[]) {
        this.owner = owner;
        this.items = !items ? [] : items;
    }

    addItem = (item: IItem): Promise<void> => {
        this.items.push(item);
        console.log(`Added ${item.quantity} ${item.name}s to cart.\n`);
        return Promise.resolve();
    }
}