function solution(absolutes, signs) {
    return signs
        .map((sign, idx) => {
            if (sign) return absolutes[idx];
            return absolutes[idx] * -1;
        })
        .reduce((acc, cur) => {
            return (acc += cur);
        }, 0);
}
