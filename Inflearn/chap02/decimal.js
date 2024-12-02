// 인프런 코테강의 2-5. 소수(에라토스테네스 체)
// 소수의 개수 출력
function solution(input) {
  let answer = 0;

  // n의 제곱근 이하 수까지 배수들 없애기

  let tmpArr = new Array(input + 1);

  tmpArr.fill(1, 0, 2).fill(0, 2);

  for (let i = 1; i <= Math.sqrt(tmpArr.length); i++) {
    if (tmpArr[i] === 0) {
      for (let j = i + 1; j < tmpArr.length; j++) {
        if (j % i == 0) {
          tmpArr[j] = 1;
        }
      }
    }
  }

  tmpArr.forEach((item) => {
    if (item === 0) answer++;
  });

  return answer;
}

console.log(solution(200000));
