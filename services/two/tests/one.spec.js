import {expect} from 'chai';
import {returnOne} from '../src/two.js';

describe('one', () => {
    it('should return one',  () => {
        expect(returnOne()).to.be.equal('two');
    });
});

