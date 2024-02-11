function solution(arr, n) {
  var answer = []
  // arr의 길이가 홀수라면 arr의 모든 짝수 인덱스 위치에 n을 더한 배열을
  // arr의 길이가 짝수라면 arr의 모든 홀수 인덱스 위치에 n을 더한 배열을
  if (arr.length % 2 == 0) {
    answer = arr.map((e, i) => {
      if (i % 2 === 0) return e
      else return e + n
    })
  } else {
    answer = arr.map((e, i) => {
      if (i % 2 === 0) return e + n
      else return e
    })
  }

  return answer
}

// 다른 풀이
// const solution = (arr, n) => arr.map((num, idx) => (arr.length % 2 !== idx % 2 ? num + n : num))
