// 첫번째 풀이
function solution(my_string) {
  var answer = 0
  my_string.split("").forEach(e => {
    if (!isNaN(e)) answer += parseInt(e)
  })
  return answer
}

// reduce()를 활용한 풀이
function solution(my_string) {
  var answer = 0
  answer = my_string.split("").reduce((acc, cur) => {
    if (!isNaN(cur)) {
      return acc + Number(cur)
    } else {
      return acc
    }
  }, 0)
  return answer
}

// 정규 표현식 이용
function solution(my_string) {
  const answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0)
  return answer
}

// 스프레드 연산자
function solution(my_string) {
  return [...my_string].reduce((acc, cur) => (Number(cur) ? +acc + +cur : acc), 0)
}
