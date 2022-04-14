import 'mocha';
import * as sinon from 'sinon';
import { expect } from 'chai';
import { createMock } from 'ts-auto-mock';
import { TestClass } from './test';
import { assert } from 'console';

describe('TestClass', () => {

  var sandbox: sinon.SinonSandbox;

//   beforeEach(() => {
//     sandbox = sinon.createSandbox();
//     sandbox.stub(console, 'log');
//   });

//   afterEach(() => {
//     sandbox.restore();
//   });

  it('prompt should equal "Hello World!"', (done) => {
    let subject = new TestClass();
    expect(subject.prompt).to.equal("Hello World!");
    done();
  });

  it('printPrompt should resolve promise', (done) => {
    let subject = new TestClass();
    subject.printPrompt().then(_ => done());
  });
});