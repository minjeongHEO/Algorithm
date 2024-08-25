function solution(priorities, location) {
    const names = priorities.map((_, i) => String.fromCharCode(65 + i));
    const target = names[location];
    const answer = [];

    while (names.length > 0) {
        const currentPriority = priorities.shift();
        const currentName = names.shift();

        if (priorities.some(e => e > currentPriority)) {
            priorities.push(currentPriority);
            names.push(currentName);
        } else {
            answer.push(currentName);
            if (currentName === target) {
                return answer.length;
            }
        }
    }
}
