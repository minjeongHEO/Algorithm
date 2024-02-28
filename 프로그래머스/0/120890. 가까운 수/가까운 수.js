function solution(array, n) {
  const subtract = array.map(e => Math.abs(n - e))

  const minValue = Math.min(...subtract)

  const closestValues = array.filter((e, idx) => subtract[idx] === minValue)

  return Math.min(...closestValues)
}

// reduce 방식: reduce를 사용하는 방식은 배열을 단 한 번만 순회하면서 필요한 계산을 수행
function solution(array, n) {
  // array.reduce를 사용하여 가장 가까운 수 찾기
  const result = array.reduce((acc, cur) => {
    // 현재 요소(cur)와 n과의 차이 및 누적값(acc)과 n과의 차이 계산
    const curDiff = Math.abs(n - cur)
    const accDiff = Math.abs(n - acc)

    // 현재 요소의 차이가 더 작으면 현재 요소를 새로운 누적값으로 설정
    if (curDiff < accDiff) {
      return cur
    }
    // 차이가 같고 현재 요소가 누적값보다 작으면 현재 요소를 새로운 누적값으로 설정
    else if (curDiff === accDiff && cur < acc) {
      return cur
    }
    // 그 외의 경우에는 기존의 누적값을 유지
    return acc
  }, array[0]) // 초기 누적값을 배열의 첫 번째 요소로 설정

  return result
}
