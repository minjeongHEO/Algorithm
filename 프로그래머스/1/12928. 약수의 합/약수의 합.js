function solution(n) {
    return Array.from({length:n}).reduce((acc,_,idx)=>{
        if (n % (idx+1) === 0) acc += idx+1
        return acc
    },0)
  }