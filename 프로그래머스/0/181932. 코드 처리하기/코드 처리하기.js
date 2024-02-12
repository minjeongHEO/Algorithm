function solution(code) {
    let ret = '';
    let mode = 0; //1
    const codeArr = code.split('');

    codeArr.forEach((e,idx) => {
        if(mode === 0){
            if(e !== '1' && idx % 2 === 0){
                ret += e
            }else if(e === '1'){
                mode = 1
            }
        }
        else if(mode === 1){
            if(e !== '1' && idx % 2 !== 0){
                ret += e
            }else if(e === '1'){
                mode = 0
            }
        }
    });
    
    return ret === '' ? 'EMPTY' : ret ;
}