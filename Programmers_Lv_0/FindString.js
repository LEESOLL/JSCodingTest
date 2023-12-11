// 프로그래머스 Lv.0 문자열 바꿔서 찾기
// myString 의 A와 B를 바꾼 문자열 중에서 pat 이 있으면 1, 없으면 0 return
function solution(myString, pat) {
    var answer = 0;
    let str = '';

    for(let i = 0; i < myString.length; i++) {
        if(myString.charAt(i) === 'A') {
            str += 'B';
        } else str += 'A';
    }

    if(str.includes(pat)) return 1;
    else return 0;
    
    return answer;
}

solution("ABBAA", "AABB");
solution("ABAB", "ABAB");