const sliceUV = p => {
    let count = 0;
    //     let u = ''
    //     let v = ''

    //     for(let i = 0; i < p.length; i++) {
    //         if(p[i] === '(') count++;
    //         else count--;

    //         if(count === 0) {
    //             u = p.slice(0,i+1);
    //             v = p.slice(i+1)
    //             break;
    //         }
    //     }
    //     return [u,v];
    let i = 0;
    for (; i < p.length; i++) {
        if (p[i] === "(") count++;
        else count--;
        if (count === 0) break;
    }
    return [p.slice(0, i + 1), p.slice(i + 1)];
};

const isRight = u => {
    // let stack = [];
    // u.forEach((e)=>{
    //     if(e==='(') stack.push(true);
    //     else stack.pop()
    // })
    // return !(!!(stack.length))
    let count = 0;
    for (let i = 0; i < u.length; i++) {
        if (u[i] === "(") count++;
        else count--;
        if (count < 0) return false;
    }
    return count === 0;
};

const reverse = u => {
    return u
        .split("")
        .map(e => (e === "(" ? ")" : "("))
        .join("");
};
function solution(p) {
    if (p === "") return p;

    const [u, v] = sliceUV(p);

    if (isRight(u)) {
        return u + solution(v);
    } else {
        return "(" + solution(v) + ")" + reverse(u.slice(1, u.length - 1));
    }
}
