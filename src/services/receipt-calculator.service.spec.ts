import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { createMock } from 'ts-auto-mock';
import {ReceiptCalculator} from './receipt-calculator.service';
import { ICart } from '../models/cart.model';

describe('Receipt Calculator Service', () => {

    // var sandbox: sinon.SinonSandbox;
    
    it('calculateSubTotal should return 20', () => {
       let subject = new ReceiptCalculator(); 
       let cartMock = createMock<ICart>();
       cartMock.items = [{name: 'test', price: 5, quantity: 4}];
       expect(subject.calculateSubTotal(cartMock)).to.equal(20);
    });
});