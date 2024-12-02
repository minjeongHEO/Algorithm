// function solution(strings, n) {
//     return strings.sort((a, b) => {
//         if (a[n] === b[n]) {
//             // n번째 문자가 같으면 사전순으로 비교
//             return a > b ? 1 : -1;
//         } else {
//             // n번째 문자를 기준으로 비교
//             return a[n] > b[n] ? 1 : -1;
//         }
//     });
// }
function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] === b[n])  return a.localeCompare(b); // 같으면 사전순 정렬
        return a[n].localeCompare(b[n]); // n번째 문자를 기준으로 정렬
    });
}
