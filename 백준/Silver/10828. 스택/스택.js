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

// 시간초과났던 코드
/*

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let count = 0;

readline
    .on("line", function (line) {
        if (count === 0) {
            count = parseInt(line);
        } else {
            input.push(line); // 입력받은 문자열 형 변환
            if (input.length === count) {
                readline.close(); // 입력 종료
            }
        }
    })
    .on("close", function () {
        main(input); // 문제 풀이 함수 호출
        process.exit(); // 프로세스 종료
    });

const runPop = stack => (stack.length ? [true, stack[stack.length - 1], stack.slice(0, stack.length - 1)] : [false, -1]);
const runPush = (stack, e) => [...stack, parseInt(e.split(" ")[1])];
const runTop = stack => (stack.length ? stack[stack.length - 1] : -1);
const runSize = stack => stack.length;
const runEmpty = stack => (stack.length ? 0 : 1);

const main = input => {
    let stack = [];

    input.forEach(e => {
        if (e.includes("push")) stack = runPush(stack, e);
        if (e === "top") console.log(runTop(stack));
        if (e === "size") console.log(runSize(stack));
        if (e === "empty") console.log(runEmpty(stack));
        if (e === "pop") {
            const popResult = runPop(stack);
            if (popResult[0]) {
                console.log(popResult[1]);
                stack = popResult[2];
            } else {
                console.log(-1);
            }
        }
    });
};
*/
