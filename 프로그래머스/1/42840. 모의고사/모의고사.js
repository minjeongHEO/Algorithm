function solution(answers) {
    let answer = [];
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    answer.push(answers.filter((e, idx) => e === (idx % 5) + 1).length);
    answer.push(answers.filter((e, idx) => e === student2[idx % 8]).length);
    answer.push(answers.filter((e, idx) => e === student3[idx % 10]).length);

    const MaxCount = Math.max(...answer);

    return answer
        .map((e, idx) => {
            if (e === MaxCount) return idx + 1;
        })
        .filter(e => e !== undefined);
}
