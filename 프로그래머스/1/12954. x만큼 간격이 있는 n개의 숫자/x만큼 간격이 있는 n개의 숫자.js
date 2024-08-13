function solution(x, n) {
    return Array(n)
        .fill(x)
        .map((e, idx) => e + x * idx);
}
