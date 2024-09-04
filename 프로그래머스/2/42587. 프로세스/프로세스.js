function solution(priorities, location) {
    // 문서의 우선순위와 인덱스를 함께 저장
    const q = priorities.map((priority, index) => ({ priority, index }));
    let order = 0;

    while (q.length > 0) {
        const current = q.shift(); // 첫 번째 문서를 꺼냄

        // 현재 문서보다 우선순위가 높은(즉, 숫자가 큰) 문서가 있는지 확인
        if (q.some(({ priority }) => priority > current.priority)) {
            // 우선순위가 더 높은 문서가 있으면 현재 문서를 다시 큐의 끝에 넣음
            q.push(current);
        } else {
            // 그렇지 않으면 현재 문서를 출력
            order += 1;

            // 출력된 문서가 찾는 문서일 경우 반환
            if (location === current.index) return order;
        }
    }
}