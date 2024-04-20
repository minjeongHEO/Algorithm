function solution(numbers, direction) {
    var answer = [];

    if(direction === 'left'){
        const add = numbers.shift()
        answer = [...numbers,add]
    }
    if(direction === 'right'){
        const add = numbers.pop()
        answer = [add,...numbers]
    }
    return answer;
}