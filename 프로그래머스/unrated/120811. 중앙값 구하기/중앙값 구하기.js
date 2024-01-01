function solution(array) {
  //array.sort();
  array.sort((a, b) => a - b); // 수치적인 정렬을 위해 비교 함수를 제공
    return array[Math.floor(array.length/ 2)]
}
