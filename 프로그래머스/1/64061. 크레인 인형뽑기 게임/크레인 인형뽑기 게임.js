// const solution = (board, moves) => {
//     let box = Array.from({ length: board.length }).map(e => Array.from(0));
//     let count = 0;
//     let baskets = [];

//     board.reverse().forEach(i => {
//         i.forEach((j, idx) => {
//             if (j) box[idx].push(j);
//         });
//     });

//     moves.forEach(e => {
//         const pick = box[e - 1].pop();
//         if (pick) baskets.push(pick);

//         let isPang = true;
//         while (isPang) {
//             isPang = false;
//             for (let i = 0; i < baskets.length - 1; i++) {
//                 if (baskets[i] === baskets[i + 1]) {
//                     baskets.splice(i, 2);
//                     count += 2;
//                     isPang = true;
//                     break;
//                 }
//             }
//         }
//     });
//     return count;
// };

// 다시 풀기
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
