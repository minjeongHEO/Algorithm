// 시간 복잡도 O(n)
function solution(n) {
    let x = 1;
    while (x < n) {
        if (n % x === 1) return x;
        x += 1;
    }
}

// 다른 풀이 (시간 복잡도 O(n))
function solution(n, x = 1) {
    while (++x) {
        if (n % x === 1) return x;
    }
}
