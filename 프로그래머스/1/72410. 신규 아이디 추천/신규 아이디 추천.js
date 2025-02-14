function solution(new_id) {
    // 소문자 치환
    let answer = new_id.toLowerCase();

    // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거
    answer = answer.replace(/[^a-z0-9-_.]/g,'');
    
    // 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    answer = answer.replace(/\.{2,}/g,'.');
    
    // 마침표(.)가 처음이나 끝에 위치한다면 제거
    answer = answer.replace(/^\.|\.$/g, '');

    // new_id가 빈 문자열이라면, new_id에 "a"를 대입
    if(!answer.length) answer = 'a';

    // new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
    if(answer.length >= 16) {
        answer = answer.slice(0, 15);
        answer = answer.replace(/\.$/, '');
    }
    
    // new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.   
    while(answer.length < 3) {
        answer += answer[answer.length - 1];
    }
    
    

    return answer;
}