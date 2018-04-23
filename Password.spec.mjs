import chai from 'chai';
import mocha from 'mocha';
import Permutator from './Permutator.mjs';
import Password from './Password.mjs';

const { describe } = mocha;
const { expect } = chai;

describe('Password', () => {
    it('can return the right string', () => {
        const p = new Password(['a', 'b']);
        expect(p.fromIndices([0, 1, 0])).to.deep.equal('aba');
    });
});