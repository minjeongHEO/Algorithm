function solution(s) {
    const arr = s.split("");
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ")") {
            const pop = stack.pop();
            if (!pop) return false;
        }
        if (arr[i] === "(") stack.push(true);
    }
    return stack.length ? false : true;
}