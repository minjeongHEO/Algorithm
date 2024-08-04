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
function solution(myString, pat) {
    const lastIndex = myString.lastIndexOf(pat);
    if (lastIndex === -1) {
        return myString;
    }
    return myString.substring(0, lastIndex + pat.length);
}

