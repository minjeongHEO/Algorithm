function solution(my_string, indices) {
    return my_string.split("").reduce((acc, cur, idx) => {
        if (indices.includes(idx)) return acc;
        return (acc += cur);
    }, "");
}

// 다른 풀이
const solution = (s, d) => [...s].filter((v, i) => !d.includes(i)).join("");
