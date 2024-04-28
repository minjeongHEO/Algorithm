function solution(numLog) {
    return numLog.reduce((acc, cur, idx) => {
        const preIdx = idx - 1 === -1 ? 0 : idx - 1;
        const diff = cur - numLog[preIdx];
        let value = "";
        if (diff === 1) value = "w";
        if (diff === -1) value = "s";
        if (diff === 10) value = "d";
        if (diff === -10) value = "a";
        return acc + value;
    }, "");
}

// 다른 풀이
const differences = {
    "1": "w",
    "-1": "s",
    "10": "d",
    "-10": "a",
};

function solution(numLog) {
    return numLog.reduce((result, curr, i) => (i === 0 ? result : result + differences[curr - numLog[i - 1]]), "");
}
