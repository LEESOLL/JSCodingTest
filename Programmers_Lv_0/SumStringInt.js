// 프로그래머스 Lv.0 문자열 정수의 합
// num_str 의 각 자리수 합을 return
// 배열로 만든 후 reduce 사용?
function solution(num_str) {
    return num_str.split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
}

console.log(solution("123456789"));
console.log(solution("1000000"));