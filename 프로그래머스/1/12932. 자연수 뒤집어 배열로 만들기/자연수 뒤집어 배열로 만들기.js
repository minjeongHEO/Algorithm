function solution(n) {
    return (n + '')
        .split('')
        .reverse()
        .map((e) => Number(e));
}

// 다른 풀이
function solution(n) {
    return (n + '')
        .split('')
        .reverse()
        .map((n) => parseInt(n));
}
