// 프로그래머스 Lv.0 n보다 커질 때까지 더하기
// numbers 더하다가 n보다 커지면 더한 값 리턴

function solution(numbers, n) {
  let answer = 0;
  let idx = 0;
  while (answer <= n) {
    answer += numbers[idx++];
  }

  return answer;
}

console.log(solution([34, 5, 71, 29, 100, 34], 123));
console.log(solution([58, 44, 27, 10, 100], 139));
