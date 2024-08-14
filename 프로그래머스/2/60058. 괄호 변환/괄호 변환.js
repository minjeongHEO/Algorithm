// 올바른 괄호인지 확인
const isCorrected = braces => {
    const stack = [];
    braces.forEach(e => {
        if (e === "(") stack.push(true);
        if ((e === ")") && (stack.length === 0)) return false;
        if ((e === ")") && (stack.length !== 0)) stack.pop();
    });
    return stack.length === 0;
};

// U, V 나누기
const sliceUV = (braces) => {
    let [L, R] = [0,0];
    let u, v;
    
    for(let i = 0; i < braces.length; i++) {
        if(braces[i] === '(') L += 1;
        else R += 1;
        
        if(L === R) {
            u = braces.slice(0, i + 1);
            v = braces.slice(i + 1)
            return {u, v}
        }
    }
}
        
function solution(p) {
    if(p === '') return '';
    const braces = p.split('');
    
    //if(isCorrected(braces)) return p;
    
    const {u, v} = sliceUV(braces);
 
    // 3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다. 
    if(isCorrected(u)) {
        return u.join('') + solution(v.join('')); //solution(v.join(''))
    }else{
        // 4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
        let result = `(${solution(v.join(''))})`
        u.shift();
        u.pop();
        const reversedU = u.map(e=>(e==='(' ? ')': '(')).join('')
        result += reversedU;
        return result;    
    }
   }