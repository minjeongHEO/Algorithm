function solution(numbers) {
    const pivot = Array.from({ length: 10 }).map((_, idx) => idx);
    return pivot.filter(e => !numbers.includes(e)).reduce((acc, cur) => acc + cur);
}

// 다른 풀이
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
