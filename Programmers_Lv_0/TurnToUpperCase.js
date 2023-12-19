// 프로그래머스 Lv.0 특정한 문자를 대문자로 바꾸기
// my_string 에서 alp 만 대문자로 바꾸기
// replace 사용
function solution(my_string, alp) {
    return my_string.replaceAll(alp, alp.toUpperCase());
}

console.log(solution("programmers", "p"));
console.log(solution("lowercase", "x"));