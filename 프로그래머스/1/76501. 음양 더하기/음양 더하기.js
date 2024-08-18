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

// 다른 풀이
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}
