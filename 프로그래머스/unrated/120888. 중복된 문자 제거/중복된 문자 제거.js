function solution(my_string) {
    return Array.from(
        my_string.split("").reduce((acc, cur) => {
            return acc.add(cur);
        }, new Set())
    ).join("");
}

//다른 풀이
function solution(my_string) {
    return [...new Set(my_string)].join("");
}
