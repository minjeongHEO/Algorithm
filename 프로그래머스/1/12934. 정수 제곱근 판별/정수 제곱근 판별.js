// 시간 복잡도 이는 (√n)
function solution(n) {
    let x = 1;
    while (x <= n) {
        if (x * x === n) {
            return (x + 1) ** 2;
        }
        x += 1;
    }
    return -1;
}

// 다른 풀이 (시간 복잡도는 O(1))
function solution(n) {
    const sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) return Math.pow(sqrt + 1, 2);
    return -1;
}

// 주어진 n이 어떤 수의 제곱인지를 확인하는 가장 간단한 방법은 Math.sqrt() 함수를 사용하는 것입니다.
// 이 함수는 n의 제곱근을 반환하므로, 반환된 값이 정수인지 확인하면 됩니다.

// Math.pow(base, exponent);
// base 에 exponent를 제곱한 값을 반환합니다.
