const clap = ["3", "6", "9"];
function solution(order) {
    return order
        .toString()
        .split("")
        .reduce((acc, cur) => {
            if (clap.includes(cur)) return (acc += 1);
            return acc;
        }, 0);
}

//다른 풀이
function solution(order) {
    var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
    return answer;
}
/*
matchAll() 메서드는 정규식에 따라 문자열에서 일치하는 모든 결과를 반복 가능한(iterable) 객체로 반환
*/

//다른 풀이
function solution(order) {
    return ("" + order).split(/[369]/).length - 1;
}
