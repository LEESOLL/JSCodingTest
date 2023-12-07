// 프로그래머스 Lv.0 문자열 뒤집기
// 1. for 문 거꾸로 돌기
// 2. Js에서 string 뒤집는 내장함수? -> 배열로 변환 후 뒤집고 다시 string 으로 합치기
function solution(my_string) {
    var answer = '';

    // 1.
    let len = my_string.length;

    for(let i = len - 1; i >= 0; i--) {
        answer += my_string.charAt(i);
    }

    //2.
    // answer = my_string.split("").reverse().join('');

    console.log(answer);

    return answer;
}

solution("jaron");
solution("bread");
