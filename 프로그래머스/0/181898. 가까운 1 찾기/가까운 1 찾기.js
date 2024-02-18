function solution(arr, idx) {
  for (let [i, e] of arr.entries()) {
    if (i >= idx && e === 1) return i
  }
  return -1
}

// 다른 풀이
const solution = (a, i) => a.indexOf(1, i)
// 이 코드는 JavaScript의 내장 함수 indexOf()를 사용하여, 주어진 값 1이 배열 a에서 처음으로 나타나는 인덱스를 찾습니다.
// indexOf() 함수의 두 번째 매개변수는 검색을 시작할 인덱스를 지정합니다.
// 따라서, 이 함수는 idx로 지정된 인덱스부터 시작하여 배열에서 값 1이 처음으로 나타나는 위치를 찾고, 그 인덱스를 반환합니다.
// 만약 해당 값이 배열에 없으면 -1을 반환합니다.
