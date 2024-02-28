function solution(array, n) {
  const subtract = array.map(e => Math.abs(n - e))

  const minValue = Math.min(...subtract)

  const closestValues = array.filter((e, idx) => subtract[idx] === minValue)

  return Math.min(...closestValues)

}
