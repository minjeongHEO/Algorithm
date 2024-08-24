// 고차함수로 풀려고 했던 코드 (실패)
function solution(s) {
    let stack = [];

    s.split("").forEach(e => {
        if (e === ")") {
            const pop = stack.pop();
            if (!pop) return false;
        }
        if (e === "(") stack.push(true);
    });

    return stack.length ? false : true;
}
// 고차함수로 푸는 코드 (성공)
function solution(s) {
    let stack = [];

    const isValid = s.split("").every(e => {
        if (e === ")") {
            if (!stack.length) return false;
            stack.pop();
        }
        if (e === "(") {
            stack.push(true);
        }
        return true;
    });

    return isValid && stack.length === 0;
}
/**
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.6MB)
테스트 7 〉	통과 (0.06ms, 33.5MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.08ms, 33.4MB)
테스트 10 〉	통과 (0.06ms, 33.4MB)
테스트 11 〉	통과 (0.08ms, 33.4MB)
테스트 12 〉	통과 (0.08ms, 33.6MB)
테스트 13 〉	통과 (0.07ms, 33.4MB)
테스트 14 〉	통과 (0.07ms, 33.4MB)
테스트 15 〉	통과 (0.09ms, 33.1MB)
테스트 16 〉	통과 (0.08ms, 33.2MB)
테스트 17 〉	통과 (0.07ms, 33.4MB)
테스트 18 〉	통과 (0.08ms, 33.4MB)
효율성  테스트
테스트 1 〉	통과 (28.67ms, 37.7MB)
테스트 2 〉	통과 (5.12ms, 37.2MB)
채점 결과
정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
 */

// 수정한 코드
function solution(s) {
    const arr = s.split("");
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ")") {
            const pop = stack.pop();
            if (!pop) return false;
        }
        if (arr[i] === "(") stack.push(true);
    }
    return stack.length ? false : true;
}
/**
정확성  테스트
테스트 1 〉	통과 (0.05ms, 32.7MB)
테스트 2 〉	통과 (0.05ms, 32.7MB)
테스트 3 〉	통과 (0.07ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.3MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (0.13ms, 33MB)
테스트 10 〉	통과 (0.05ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.14ms, 33.1MB)
테스트 13 〉	통과 (0.14ms, 33.3MB)
테스트 14 〉	통과 (0.13ms, 33.4MB)
테스트 15 〉	통과 (0.15ms, 33.4MB)
테스트 16 〉	통과 (0.15ms, 33.4MB)
테스트 17 〉	통과 (0.13ms, 33.5MB)
테스트 18 〉	통과 (0.13ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (5.77ms, 38.1MB)
테스트 2 〉	통과 (5.79ms, 38.1MB)
채점 결과
정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
 */

// 수정한 코드 리팩토링
function solution(s) {
    let stack = [];

    for (let char of s) {
        if (char === ")") {
            if (!stack.length) return false;
            stack.pop();
        } else if (char === "(") {
            stack.push(true);
        }
    }

    return stack.length === 0;
}
/**
정확성  테스트
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.05ms, 33.5MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.14ms, 33.5MB)
테스트 13 〉	통과 (0.15ms, 33.4MB)
테스트 14 〉	통과 (0.14ms, 33.4MB)
테스트 15 〉	통과 (0.14ms, 33.5MB)
테스트 16 〉	통과 (0.15ms, 33.5MB)
테스트 17 〉	통과 (0.14ms, 33.5MB)
테스트 18 〉	통과 (0.14ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (5.96ms, 38.4MB)
테스트 2 〉	통과 (28.63ms, 38.6MB)
채점 결과
정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
 */

// 다른 풀이
function solution(s) {
    let cum = 0;
    for (let paren of s) {
        cum += paren === "(" ? 1 : -1;
        if (cum < 0) {
            return false;
        }
    }
    return cum === 0 ? true : false;
}
/**
정확성  테스트
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.2MB)
테스트 8 〉	통과 (0.04ms, 33.2MB)
테스트 9 〉	통과 (0.04ms, 33.4MB)
테스트 10 〉	통과 (0.04ms, 33.5MB)
테스트 11 〉	통과 (0.06ms, 33.3MB)
테스트 12 〉	통과 (0.13ms, 33.4MB)
테스트 13 〉	통과 (0.13ms, 33.4MB)
테스트 14 〉	통과 (0.13ms, 33.5MB)
테스트 15 〉	통과 (0.13ms, 33.3MB)
테스트 16 〉	통과 (0.13ms, 33.4MB)
테스트 17 〉	통과 (0.13ms, 33.5MB)
테스트 18 〉	통과 (0.13ms, 33.5MB)
효율성  테스트
테스트 1 〉	통과 (5.00ms, 38.3MB)
테스트 2 〉	통과 (4.75ms, 38.3MB)
채점 결과
정확성: 69.5
효율성: 30.5
합계: 100.0 / 100.0
 */
