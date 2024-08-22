const mapping = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

function solution(s) {
    var answer = [];

    s.split("").reduce((acc, cur) => {
        if (isNaN(Number(cur))) {
            acc += cur;
            if (acc in mapping) {
                answer.push(mapping[acc]);
                return "";
            }
            return acc;
        }
        answer.push(cur);
        return "";
    }, "");

    return Number(answer.join(""));
}

//solution("one4seveneight");
