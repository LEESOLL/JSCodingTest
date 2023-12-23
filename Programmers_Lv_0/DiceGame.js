// 프로그래머스 Lv.0 주사위 게임 1
// a, b 홀수 -> Math.pow(a, 2) + Math.pow(b, 2)
// a, b 중 하나만 홀수 -> 2 * (a + b)
// a, b 모두 짝수 -> 절대값 a - b
function solution(a, b) {
  if (a % 2 === 0) {
    if (b % 2 === 0) return Math.abs(a - b);
    else return 2 * (a + b);
  } else {
    if (b % 2 === 0) return 2 * (a + b);
    else return Math.pow(a, 2) + Math.pow(b, 2);
  }
}

console.log(solution(3, 5));
console.log(solution(6, 1));
console.log(solution(2, 4));
