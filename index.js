import Password from './Password.mjs';
import Permutator from './Permutator.mjs';
import prettyMs from 'pretty-ms';

const PASSWORD  = 'abcdz';

function test(password) {
    return password === PASSWORD;
}

function* gen(max) {
    const p = new Permutator(max);
    yield p.indices;
    while (true) {
        yield p.inc();
    }
}

let tries = 0;
let pass = new Password(Password.CHARS().ALPHA);
const start = Date.now();
for (const indices of gen(pass.maxIndex)) {
    const currentGuess = pass.fromIndices(indices);
    if (test(currentGuess)) {
        const duration = Date.now() - start;
        console.log(`Success on try #${tries} (${prettyMs(duration)})! Password is "${currentGuess}"`);
        break;
    }
    tries++;
    if (tries % 1000000 === 0) {
        const duration = Date.now() - start;
        console.log(`Try #${tries / 1000000} M: ${currentGuess} [${currentGuess.length}/${PASSWORD.length} chars] (${prettyMs(duration)})`);
    }
}
