import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { createMock } from 'ts-auto-mock';
import { CartPrinter } from './cart-printer.service';
import { ICart } from '../models/cart.model';

describe('Cart Printer Service', () => {

    // var sandbox: sinon.SinonSandbox;
    
    it('printCart should return resolved promise', (done) => {
       let subject = new CartPrinter(); 
       let cartMock = createMock<ICart>();

       subject.printCart(cartMock).then(_ => done());
    });
});