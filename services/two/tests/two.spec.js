import {expect} from 'chai';
import {returnOne} from '../src/two.js';

describe('two', () => {
    it('should return two',  () => {
        expect(returnOne()).to.be.equal('two');
    });
});

