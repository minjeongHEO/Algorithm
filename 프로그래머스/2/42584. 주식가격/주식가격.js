function solution(prices) {
  const result = Array.from({ length: prices.length }).fill(0);
  const indexStack = [];

  for (let i = 0; i < prices.length; i++) {
    while (
      indexStack.length > 0 &&
      prices[indexStack[indexStack.length - 1]] > prices[i]
    ) {
      const topIdx = indexStack.pop();
      result[topIdx] = i - topIdx;
    }
    indexStack.push(i);
  }
  while (indexStack.length > 0) {
    const top = indexStack.pop();
    result[top] = prices.length - 1 - top;
  }

  return result;
}
