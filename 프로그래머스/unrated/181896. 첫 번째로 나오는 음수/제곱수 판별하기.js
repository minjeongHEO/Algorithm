function solution(num_list) {
  // num_list.forEach((e,i) => {
  //     if(e < 0) return i;
  // });
  // return -1;

  const negativeIndex = num_list.findIndex(e => e < 0)
  return negativeIndex !== -1 ? negativeIndex : -1
}

/**
JavaScript의 forEach 메서드는 콜백 함수 내에서의 return이 외부 함수에 영향을 미치지 않습니다. 
따라서 forEach 내부에서 return i;는 해당 콜백 함수 내에서만 동작하고, 외부 함수인 solution 함수에는 영향을 주지 않습니다.

그러므로 forEach를 사용하는 대신에 
for 루프나 findIndex 메서드 등을 사용하여 첫 번째 음수의 인덱스를 찾아 반환해야 합니다. 

- findIndex()
  : 주어진 판별 함수에 따라 배열에서 "처음으로" 조건을 만족하는 요소의 인덱스를 반환합니다. 
    만약 찾지 못하면 -1을 반환
*/
