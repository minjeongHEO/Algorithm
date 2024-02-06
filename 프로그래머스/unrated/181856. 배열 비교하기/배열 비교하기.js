function solution(arr1, arr2) {
  let len1 = arr1.length
  let len2 = arr2.length
  if (len1 < len2) {
    return -1
  } else if (len1 > len2) {
    return 1
  } else if (len1 == len2) {
    //각 배열에 있는 모든 원소의 합을 비교하여 다르다면 더 큰 쪽이 크고, 같다면 같습니다.
    let sum1 = arr1.reduce((a, b) => a + b, 0)
    let sum2 = arr2.reduce((a, b) => a + b, 0)
    return sum1 > sum2 ? 1 : sum1 < sum2 ? -1 : 0
  }
}
