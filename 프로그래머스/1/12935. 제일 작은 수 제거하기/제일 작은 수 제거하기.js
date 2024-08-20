function solution(arr) {
    return arr.length === 1 ? [-1] : arr.filter(e => e !== Math.min(...arr));
}
