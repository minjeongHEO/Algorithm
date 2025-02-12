function solution(numbers) {

  const answer = numbers.map(num => String(num)).sort((a, b) => {
    // (b + a)가 (a + b)보다 크면 b가 앞에, 아니면 a가 앞에
    if (a + b > b + a) return -1;
    if (a + b < b + a) return 1;
    return 0;
  }).join('');
    
    
  
  // 만약 이어 붙인 결과가 '0'으로 시작하면 '0'만 반환
  // (예: 모든 숫자가 0일 때 '0000...' -> '0')
  return answer[0] === '0' ? '0' : answer;
}
