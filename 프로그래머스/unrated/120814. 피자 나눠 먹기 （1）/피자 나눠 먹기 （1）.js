function solution(n) {
    var answer = 0;
    if(n < 8){
        answer = 1;
    }else{
        answer = Math.floor(n / 7);
        if(n % 7 != 0){
            answer += 1;
        }
    }
        
    return answer;
}

// const solution = (n) => Math.ceil(n / 7) 
// Math.ceil:반올림