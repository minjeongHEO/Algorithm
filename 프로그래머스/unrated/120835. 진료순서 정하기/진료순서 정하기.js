function solution(emergency) {
  var answer = []
  //let dec = emergency.sort((a,b)=>b-a) //이럼 indexOf사용시 sort 전의 인덱스가 나옴
  let dec = emergency.slice().sort((a, b) => b - a) //그래서 원본 배열을 변경
  for (let i = 0; i < dec.length; i++) {
    // indexOf가 정렬 전의 인덱스를 반환
    answer.push(dec.indexOf(emergency[i]) + 1)
  }

  return answer
}

/**
 * - sort() 함수
 * 그냥 sort() 함수를 사용하실 때 중요한 부분을 간과하시다가 당혹스러운 경험을 하시게 되는데요. 
 * 바로 정렬하기 전에 배열 내의 값을 내부적으로 문자열로 변환한다는 사실입니다.
 * 이 부분 때문에 특히 숫자로 이뤄진 배열을 정렬할 때는 정말로 엉뚱한 결과를 얻을 수 있습니다.
 * 
 * !! 그래서 !! 숫자 배열을 제대로 정렬하려면 
   [-3, 2, 0, 1, 3, -2, -1].sort((a, b) => a - b);
      // [-3, -2, -1, 0, 1,  2,  3]
   [-3, 2, 0, 1, 3, -2, -1].sort((a, b) => b - a);
      // [3, 2, 1, 0, -1, -2, -3]
 * https://www.daleseo.com/js-sort-to-sorted/
 * 
 * 정렬은 원본 배열을 변경
 * 
 * 얕은 복사를 수행하는 방법 중 하나인 slice()를 사용하여 복사 후 정렬
 * 
 */
