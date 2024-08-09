// function solution(myString, pat) {
//     const arr = myString.split(new RegExp(`(${pat})`)).filter(e => e !== "");

//     let result = "";
//     if (!arr[2] || arr[2] !== pat) return arr[0] + pat;

//     result += arr[0] + pat;

//     for (let i = 2; i < arr.length; i++) {
//         if (arr[i] === pat) result += arr[i];
//         else break;
//     }
//     return result;
// }
// 위 코드방식의 문제점
// split과 filter을 사용하여 배열을 만드는 부분에서 예상치 못한 결과가 발생할 수 있습니다.
// arr[2]를 체크하는 부분에서 arr의 길이가 충분하지 않으면 에러가 발생할 수 있습니다.
// result를 생성하는 부분에서 논리적 오류가 발생할 수 있습니다.
// 개선된 접근 방식
// 문자열에서 pat이 마지막으로 등장하는 위치를 찾고, 그 위치까지의 문자열을 잘라내는 간단한 방식으로 문제를 해결할 수 있습니다.

// 이를 위해 lastIndexOf 메서드를 사용할 수 있습니다. 이 메서드는 주어진 문자열에서 특정 문자열이 마지막으로 나타나는 위치를 반환합니다.
// 이 위치를 기반으로 원본 문자열을 잘라내면 됩니다.
function solution(myString, pat) {
    const lastIndex = myString.lastIndexOf(pat);
    if (lastIndex === -1) {
        return myString;
    }
    return myString.substring(0, lastIndex + pat.length);
}
