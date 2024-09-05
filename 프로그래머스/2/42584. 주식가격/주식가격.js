function solution(prices) {
    const len = prices.length;
    return prices.map((p, i) => {
        let count = 0;
        for (let j = 0; j < len - (i + 1); j++) {
            count += 1;
            if (prices[i + j + 1] - p < 0) break;
        }
        return count;
    });
}
