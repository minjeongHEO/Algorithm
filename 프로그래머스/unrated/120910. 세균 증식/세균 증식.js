function solution(n, t) {
  var answer = n
  for (let i = 0; i < t; i++) {
    answer *= 2
  }
  return answer
}

// function solution(n, t) {
//   return n << t
// }

/**
 * 시프트 연산자
 
  * << (왼쪽 시프트 연산자)
    지정한 수만큼 비트 전체를 왼쪽으로 이동한다. 몇 칸 이동했는지에 따라 2의 제곱만큼 수가 곱해진다.
    const b5 = 4 << 2;
    console.log(b5); //16
      //4를 2비트 왼쪽으로 이동한다.
      //0000 0100 4
      //0000 1000 8(1비트 이동)
      //0001 0000 16(2비트 이동)
      //4 * 2 * 2
    
  * >> (오른쪽 시프트 연산자)
    지정한 수만큼 비트 전체를 오른쪽으로 이동한다. 오른쪽에 있는 비트가 소멸되기 때문에 규칙성이 없다.
    const b6 = 4 >> 2;
    console.log(b6); //1
      //4를 2비트 오른쪽으로 이동한다.
      //0000 0100 4
      // 000 0010 2(1비트 이동)
      //  00 0001 1(2비트 이동)
 */
