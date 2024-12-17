function solution(arr1, arr2) {
  // arr1의 행 수
  const row = arr1.length;
  // arr2의 열 수
  const col2 = arr2[0].length;

  const col1 = arr1[0].length;

  // 결과 값 넣을 배열 초기화
  const result = Array.from({ length: row }).map((e) =>
    Array.from({ length: col2 }).fill(0)
  );

  for (let r= 0; r < row; r++) { // arr1의 행을 순회
    for (let c = 0; c < col2; c++) { // arr2의 열을 순회
      for (let k = 0; k < col1; k++) { // 곱하고 더하는 과정
        result[r][c] += arr1[r][k] * arr2[k][c];
      }
    }
  }

  return result;
}
