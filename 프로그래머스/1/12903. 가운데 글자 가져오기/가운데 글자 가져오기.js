function solution(s) {
    const target = Math.floor(s.length / 2);
    return s.length % 2 ? s[target] : s.slice(target - 1, target + 1);
}
