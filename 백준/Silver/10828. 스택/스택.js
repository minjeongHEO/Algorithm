const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

readline
    .on("line", function (line) {
        input.push(line);
    })
    .on("close", function () {
        main(input.slice(1)); // 첫 번째 입력(명령의 수)은 제외하고 문제 풀이 함수 호출
        process.exit(); // 프로세스 종료
    });

const main = input => {
    let stack = [];
    let result = [];

    input.forEach(command => {
        if (command.startsWith("push")) {
            stack.push(parseInt(command.split(" ")[1]));
        } else if (command === "pop") {
            result.push(stack.length ? stack.pop() : -1);
        } else if (command === "size") {
            result.push(stack.length);
        } else if (command === "empty") {
            result.push(stack.length ? 0 : 1);
        } else if (command === "top") {
            result.push(stack.length ? stack[stack.length - 1] : -1);
        }
    });

    console.log(result.join("\n"));
};
