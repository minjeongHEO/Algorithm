function hasNonFiveOrZero(numStr){
    let regex = /[^50]/;
    return regex.test(numStr);
}

function solution(l, r) {
    let answer = [];
    
    for(let i=l; i<=r; i++) {
        if(hasNonFiveOrZero(i.toString())) {
            continue;
        }else{
            answer.push(i);
        }       
    }
    
    if(answer.length > 0) {
        answer.sort(function(a,b){
            return a-b;
            //a가 b보다 작다면 a - b는 음수
            //a가 b와 같다면 a - b는 0
            //a가 b보다 크다면 a - b는 양수
        })
    }else{
        answer.push(-1);
    }

    return answer;
}