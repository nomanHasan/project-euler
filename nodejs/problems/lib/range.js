const range = (from = 0, to = 0) => {

    const ar = [];

    if (from > to) {

        for (let i = from; i >= to; i--) {
            ar.push(i);
        }
        return ar;
    } else {
        for (let i = from; i <= to; i++) {
            ar.push(i);
        }
        return ar;
    }
};

module.exports = {
    range
}