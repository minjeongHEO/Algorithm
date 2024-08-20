function solution(arr, divisor) {
    const f = arr.filter(e => e % divisor === 0);
    const result = f.length ? f.sort((a, b) => a - b) : [-1];

    return result;
}

// 다른 풀이
function solution(arr, divisor) {
    var answer = arr.filter(v => v % divisor == 0);
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}
