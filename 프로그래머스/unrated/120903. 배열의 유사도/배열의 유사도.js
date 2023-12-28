// function solution(s1, s2) {
//   var answer = 0

//   s1.forEach (e => {
//     if (s2.includes(e)) answer++;
//   })

//   return answer //같은 원소의 개수
// }

function solution(s1, s2) {
  return s1.filter((e) => s2.includes(e)).length;
}