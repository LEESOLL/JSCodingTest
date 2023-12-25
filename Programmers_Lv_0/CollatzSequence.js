// 프로그래머스 Lv.0 콜라츠 수열 만들기
// n이 짝수일 때는 2 로 나눔
// n이 홀수일 때는 3 * n + 1 로 바꾸는 계산 계속 반복
// 위에서 나오는 수 담은 배열 출력
function solution(n) {
  var answer = [];

  while (n > 1) {
    answer.push(n);
    if (n % 2 === 0) n = n / 2;
    else n = 3 * n + 1;
  }
  answer.push(1);

  return answer;
}

console.log(solution(10));
