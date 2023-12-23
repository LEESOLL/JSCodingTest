// 프로그래머스 Lv.0 카운트 다운
function solution(start, end_num) {
  var answer = [];

  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }

  return answer;
}

console.log(solution(10, 3));
