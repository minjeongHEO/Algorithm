function solution(num, k) {
    let answer = num.toString().indexOf(k.toString());
    if (answer !== -1) return answer + 1;
    return answer;
}

// 다른 풀이
function solution(num, k) {
    return (
        num
            .toString()
            .split("")
            .map(el => Number(el))
            .indexOf(k) + 1 || -1
    );
}
/**
 * Nullish Coalescing Operator (ES11) (널 병합 연산자)
 * https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 * || 는 앞의 값이 falsy값 일때만 뒤의 값이 return
 * ‘’, 0, NaN, false, null, undefined ⇒ falsy값
 */
