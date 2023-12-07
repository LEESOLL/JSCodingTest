// 프로그래머스 Lv.0 특정 문자 제거하기
// 문자열 my_string 에서 letter 제거
// js의 replace 써보기
function solution(my_string, letter) {
    var answer = my_string.replaceAll(letter, '');

    console.log(answer);
    
    return answer;
}

solution("BCBdbe", "B");

