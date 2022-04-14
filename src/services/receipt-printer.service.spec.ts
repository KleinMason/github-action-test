import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { createMock } from 'ts-auto-mock';
import { ReceiptPrinter } from './receipt-printer.service';

describe('Receipt Printer Service', () => {

    // var sandbox: sinon.SinonSandbox;

    it('COLS should equal 40', () => {
        let subject = new ReceiptPrinter();
        expect(subject.COLS).to.equal(40);
    });
});