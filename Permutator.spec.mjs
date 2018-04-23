import chai from 'chai';
import mocha from 'mocha';
import Permutator from './Permutator.mjs';

const { describe } = mocha;
const { expect } = chai;

describe('Permutator', () => {
    it('iterates correctly', () => {
        const p = new Permutator(2);
        expect(p.indices).to.deep.equal([0]);
        expect(p.inc()).to.deep.equal([1]);
        expect(p.inc()).to.deep.equal([0, 0]);
        expect(p.inc()).to.deep.equal([1, 0]);
        expect(p.inc()).to.deep.equal([0, 1]);
        expect(p.inc()).to.deep.equal([1, 1]);
    });

    it('works with for..of', () => {
        function* gen(length, max) {
            const p = new Permutator(2, 2);
            yield p.indices;
            for (let i = 0; i < 4; i++ ) {
                yield p.inc();
            }
        }

        const expected = [
            [ 0 ],
            [ 1 ],
            [ 0, 0 ],
            [ 1, 0 ],
            [ 0, 1 ],
        ];
        let i =0;

        for (const a of gen(2, 2)) {
            expect(a).to.deep.equal(expected[i]);
            i++;
        }
    });
});
