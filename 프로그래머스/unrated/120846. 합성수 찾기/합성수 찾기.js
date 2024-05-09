function findDivisors(n) {
    let divisors = new Set();
    divisors.add(1);
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) divisors.add(n / i);
    }
    return divisors;
}

function solution(n) {
    var answer = 0;

    while (n > 0) {
        if (findDivisors(n).size >= 3) answer += 1;
        n -= 1;
    }
    return answer;
}

//다른 코드
function countCompositeNumbers(n) {
    if (n < 4) return 0; // 4보다 작은 수 중 합성수는 없음

    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }

    // 합성수 개수 세기: 소수가 아니면서 1도 아닌 수
    let compositeCount = 0;
    for (let k = 4; k <= n; k++) {
        if (!isPrime[k]) compositeCount++;
    }
    return compositeCount;
}
