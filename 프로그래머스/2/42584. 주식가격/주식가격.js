function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const indexStack = [];

    for (let curIdx = 0; curIdx < prices.length; curIdx++) {
        const curPrice = prices[curIdx];

        // 현재 가격이 스택에 저장된 가격보다 낮다면, 가격이 떨어졌으므로 계산
        while (indexStack.length && prices[indexStack[indexStack.length - 1]] > curPrice) {
            const prevIdx = indexStack.pop(); // 스택에서 인덱스를 꺼냄
            answer[prevIdx] = curIdx - prevIdx; // 가격이 떨어진 시간 계산
        }

        indexStack.push(curIdx); // 현재 인덱스를 스택에 추가
    }
    // 끝까지 가격이 떨어지지 않은 인덱스 처리
    while (indexStack.length) {
        const idx = indexStack.pop();
        answer[idx] = prices.length - 1 - idx; // 끝까지 가격이 떨어지지 않은 경우
    }
    return answer;
}


