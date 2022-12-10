import {expect} from 'chai';
import {returnNameOfMicroservice} from '../src/one.js';

describe('one', () => {
    it('should return name',  () => {
        expect(returnNameOfMicroservice('one')).to.be.equal('microservice one');
    });

    it('should do math', () => {
        expect(2 + 2).to.be.equal(4);
    });
});

