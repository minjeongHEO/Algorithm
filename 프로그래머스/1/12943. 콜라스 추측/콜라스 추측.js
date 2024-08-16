function solution(num, count = 0) {
    if (count === 0 && num === 1) return 0;
    if (num === 1) return count;
    if (count >= 500) return -1;

    let result = !!(num % 2) ? num * 3 + 1 : num / 2;

    return solution(result, count + 1);
}

// 다른 풀이
function solution(num) {
    let count = 0;

    while (num !== 1) {
        if (count >= 500) return -1;
        num = num % 2 === 0 ? num / 2 : num * 3 + 1;
        count++;
    }

    return count;
}
