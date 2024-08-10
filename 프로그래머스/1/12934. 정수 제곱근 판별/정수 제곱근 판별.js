function solution(n) {
    let x = 1;

    while (x <= n) {
        if (x * x === n) {
            return (x + 1) ** 2;
        }

        x += 1;
    }
    return -1;
}
