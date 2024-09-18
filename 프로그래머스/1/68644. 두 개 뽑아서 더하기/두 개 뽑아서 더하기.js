function solution(numbers, idx = 0, answer = new Set()) {
    if (idx >= numbers.length) return Array.from(answer).sort((a, b) => a - b);

    for (let i = 0; i < numbers.length; i++) {
        if (i === idx) continue;
        answer.add(numbers[idx] + numbers[i]);
    }

    return solution(numbers, idx + 1, answer);
}
