function solution(numbers) {
    var answer = 0;
    numbers.sort((a,b)=>a-b)
    
    answer = (numbers[numbers.length-1] * numbers[numbers.length-2]) > (numbers[0] * numbers[1]) ? (numbers[numbers.length-1] * numbers[numbers.length-2]) : (numbers[0] * numbers[1])

    
    console.log(numbers)
    console.log((numbers[0] * numbers[1]))
    return answer
}