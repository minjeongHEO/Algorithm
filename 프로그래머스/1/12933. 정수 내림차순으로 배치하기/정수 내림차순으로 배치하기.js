function solution(n) {
    return Number(
        (n + '')
            .split('')
            .sort((a, b) => b - a)
            .join('')
    );
}
// 다른 풀이
function solution(n) {
    return Number((n + '').split('').sort((a, b) => b - a) * 1);
}
