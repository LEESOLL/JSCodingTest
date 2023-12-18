// 프로그래머스 Lv.0 문자 반복 출력하기
// my_String에 들어있는 각 문자를 n만큼 반복해서 출력
// js repeat 함수 찾아보기
function solution(my_string, n) {
    var answer = '';

    for(let i = 0; i < my_string.length; i++) {
        for(let j = 0; j < n; j++) {
            answer += my_string.charAt(i);
        }
    }

    // console.log(answer);

    return answer;
}

solution("hello", 3);