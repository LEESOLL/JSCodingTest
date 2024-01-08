// 프로그래머스 Lv.0 7의 개수
function solution(array) {
  var answer = 0;

  array
    .join("")
    .split("")
    .forEach((item) => (item == 7 ? answer++ : answer));

  return answer;
}

console.log(solution([7, 77, 17]));
console.log(solution([10, 29]));
