import {expect} from 'chai';

describe('math', () => {
    const answer = 2 + 2;
    it('should do math', () => {
        expect(answer).to.be.equal(4);
    });
});