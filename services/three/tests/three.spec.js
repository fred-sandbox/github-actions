import {expect} from 'chai';
import {returnOne} from '../src/three.js';

describe('three', () => {
    it('should return three',  () => {
        expect(returnOne()).to.be.equal('three');
    });
});

