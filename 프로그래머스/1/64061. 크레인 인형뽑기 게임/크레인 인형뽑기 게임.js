function solution(board, moves) {
  const stacks = Array.from({ length: board.length }).map((e) => []);
  const bucket = [];
  let result = 0;
  board.reverse().forEach((e) => {
    e.forEach((a, idx) => {
      if (a) stacks[idx].push(a);
    });
  });

  moves.forEach((m) => {
    const popItem = stacks[m - 1].pop();

    if (popItem) {
      if (bucket[bucket.length - 1] === popItem) {
        result += 2;
        bucket.pop();
      } else {
        bucket.push(popItem);
      }
    }
  });

  return result;
}