function solution(phone_number) {
    const e = Array(phone_number.length - 4).fill("*");
    const n = phone_number.split("").slice(-4);
    return [...e, ...n].join("");
}

// 다른 풀이: 정규식 사용
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}
