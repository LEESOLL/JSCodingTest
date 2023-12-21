// 프로그래머스 Lv.0 배열 만들기 1
// 정수 n과 k
// 1이상 n이하의 정수 중 k의 배수 오름차순 정렬
function solution(n, k) {
  var answer = [];

  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }

  return answer;
}

console.log(solution(10, 3));
console.log(solution(15, 5));
