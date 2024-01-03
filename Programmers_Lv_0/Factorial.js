// 프로그래머스 Lv.0 팩토리얼
// n 보다 작거나 같은 i팩토리얼 구하기
function solution(n) {
  let answer;
  let tmp = 1;

  for (let i = 1; i <= 10; i++) {
    tmp *= i;
    if (tmp >= n) {
      tmp > n ? (answer = i - 1) : (answer = i);
      break;
    }
  }

  return answer;
}

console.log(solution(3628800));
console.log(solution(7));
