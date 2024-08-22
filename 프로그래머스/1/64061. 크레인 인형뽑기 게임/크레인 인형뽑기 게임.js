const solution = (board, moves) => {
    const newBoard = Array.from({ length: board.length }).map(e => Array(0));
    board.reverse().forEach(i => i.forEach((j, idx) => j !== 0 && newBoard[idx].push(j)));

    const stack = [];
    let count = 0;

    moves.forEach(move => {
        const pop = newBoard[move - 1].pop();

        if (pop) stack.push(pop);

        if (stack.length - 2 >= 0 && stack[stack.length - 2] === pop) {
            stack.pop();
            stack.pop();
            count += 2;
        }
    });

    return count;
};
