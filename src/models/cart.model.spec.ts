import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { createMock } from 'ts-auto-mock';
import { Cart, ICart } from './cart.model';
import { IOwner, Owner } from './owner.model';
import { IItem, Item } from './item.model';

describe('Cart Model', () => {

    // var sandbox: sinon.SinonSandbox;

    it('addItem should push an item to the items array', () => {
        let owner: IOwner = new Owner('test', 'test');
        let subject: ICart = new Cart(owner);
        let item: IItem = new Item("test", 1, 1);
        subject.addItem(item);
        expect(subject.items.length).to.equal(1);
    });

    it('items array should include items that are passed in as a constructor argument', () => {
        let owner: IOwner = new Owner('test', 'test');
        let items: IItem[] = [
            {
                name: 'var1',
                price: 0, 
                quantity: 0
            },
            {
                name: 'var2',
                price: 0,
                quantity: 0
            }
        ]
        let subject: ICart = new Cart(owner, items);
        expect(subject.items.length).to.equal(2);
    });
});