function solution(board, k) {
    var answer = 0;

    board.forEach((e, i_idx) => {
        e.forEach((e, j_idx) => {
            if (i_idx + j_idx <= k) answer += e;
        });
    });
    return answer;
}

// 다른 풀이
function solution(board, k) {
    return board.reduce((total, row, i) => total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0), 0);
}
