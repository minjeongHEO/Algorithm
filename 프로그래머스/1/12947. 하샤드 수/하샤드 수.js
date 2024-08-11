function solution(x) {
    const h = x.toString().split('').reduce((acc, cur)=> acc += Number(cur),0);
    return !(!!(x % h))  
}