function solution(my_string) {
    return my_string.toLowerCase().split("").sort().join("");
}
// 다른 풀이
function solution(s) {
    return [...s.toLowerCase()].sort().join("");
}
