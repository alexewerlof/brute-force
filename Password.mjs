const L_ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const U_ALPHA = L_ALPHA.toUpperCase();
const ALPHA = [ L_ALPHA, U_ALPHA ];
const NUM = '0123456789';
const PUNC = '!"#$%&()*+,-./:;<=>?@[\]^_`{¦}~\'';
const ALPHA_NUM = [ ALPHA, NUM ];
const ALL = [ ALPHA_NUM, PUNC ];

const CHARS = {
    ALL,
    ALPHA_NUM,
    ALPHA,
    NUM,
    L_ALPHA,
    U_ALPHA,
    PUNC,
};

export default class Password {

    static CHARS() {
        return CHARS;
    }

    constructor(strArr) {
        this.chars = [];
        strArr.forEach(str => {
            this.chars.push(...str.split(''));
        });
        if (this.chars.some(ch => typeof ch !== 'string')) {
            throw `All characters must be string`;
        }
        if (this.chars.length === 0) {
            throw `No possible characters?!`;
        }
    }

    get maxIndex() {
        return this.chars.length;
    }

    fromIndices(indices) {
        return indices
            .map(i => this.chars[i])
            .join('');
    }
}