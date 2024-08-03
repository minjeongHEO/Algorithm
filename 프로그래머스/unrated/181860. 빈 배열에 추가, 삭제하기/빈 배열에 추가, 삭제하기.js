function solution(arr, flag) {
    return flag.reduce((acc, cur, idx) => {
        if (cur) {
            Array.from({ length: arr[idx] * 2 }).forEach(() => acc.push(arr[idx]));
        } else {
            Array.from({ length: arr[idx] }).forEach(() => acc.pop());
        }
        return acc;
    }, []);
}

// 다른 풀이
function solution(arr, flag) {
    return arr.reduce((prev, num, i) => (flag[i] ? [...prev, ...new Array(num * 2).fill(num)] : prev.slice(0, -num)), []);
}
