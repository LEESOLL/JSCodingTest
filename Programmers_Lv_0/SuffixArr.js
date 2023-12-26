// 프로그래머스 Lv.0 접미사 배열
function solution(my_string) {
  var answer = [];

  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i));
  }

  return answer.sort();
}

console.log(solution("banana"));
console.log(solution("programmers"));
