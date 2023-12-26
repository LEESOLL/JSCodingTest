// 프로그래머스 Lv.0 문자열 정렬하기 (1)
// my_string 의 숫자만 골라서 오름차순 정렬 후 리스트 리턴
function solution(my_string) {
  var answer = [];

  [...my_string].forEach((item) => {
    if (Number.isInteger(parseInt(item))) {
      answer.push(parseInt(item));
    }
  });

  return answer.sort((a, b) => a - b);
}

console.log(solution("hi12392"));
console.log(solution("p2o4i8gj2"));
console.log(solution("abcde0"));
