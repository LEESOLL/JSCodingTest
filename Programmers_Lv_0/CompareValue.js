// 프로그래머스 Lv.0 두 수의 연산값 비교하기
function solution(a, b) {
  return parseInt(a.toString() + b.toString()) > 2 * a * b
    ? parseInt(a.toString() + b.toString())
    : 2 * a * b;
}

console.log(solution(2, 91));
console.log(solution(91, 2));
