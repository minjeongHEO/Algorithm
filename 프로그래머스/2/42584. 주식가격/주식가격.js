// function solution(prices) {
//     return prices.map((price, idx) => {
//         const arr = prices.slice(idx);
//         const pivot = arr.findIndex(e => e < price);
//         if (pivot === -1) return arr.length - 1;
//         return pivot;
//     });
// }
function solution(prices) {
    const answer = new Array(prices.length).fill(0);
    const stack = [];
    
    for (let i = 0; i < prices.length; i++) {
        // 스택에 있는 인덱스들 중에서 현재 가격보다 높은 가격을 가진 인덱스를 처리
        while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    // 스택에 남아있는 인덱스들은 끝까지 가격이 떨어지지 않은 경우
    while (stack.length) {
        const j = stack.pop();
        answer[j] = prices.length - 1 - j;
    }
    
    return answer;
}


