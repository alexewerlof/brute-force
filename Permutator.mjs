export default class Permutator {
    constructor(max) {
        this.max = max;
        this.indices = [0];
    }

    set length(value) {
        this.indices.length = value;
        this.indices.fill(0);
    }

    get length() {
        return this.indices.length;
    }

    inc(i = 0) {
        if (i >= this.length) {
            this.length++;
            return this.indices;
        }
        const val = this.indices[i];
        if (val >= this.max - 1) {
            this.indices[i] = 0;
            return this.inc(i + 1);
        }
        this.indices[i]++;
        return this.indices;
    }
}
