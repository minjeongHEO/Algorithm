function solution(a, d, included) {
    let answer = 0;
    let boolArr = included;
    let valArr = [];
    
    for(let i=0; i<boolArr.length; i++) {
        if(boolArr[i]) {
            //valArr.push(a+(d*i));
            answer += a+(d*i);
        } 
    }
    
    //valArr.forEach((e)=>{answer+=e});
    
    return answer;
    
}