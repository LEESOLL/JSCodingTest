// 인프런 코테강의 3-5. 연속된 자연수의 합
// n이 주어지면 2개 이상의 연속된 자연수의 합으로 정수 n을 표현하는 방법의 가짓수
function solution(input) {
  let answer = 0;

  let tmp = [];

  for (let i = 1; i <= input / 2 + 1; i++) {
    tmp.push(i);
  }

  let lp = 0;
  let rp = 0;
  let tmpSum = 0;

  while (rp < input / 2 + 1) {
    if (tmpSum < input) {
      tmpSum += tmp[rp++];
    } else if (tmpSum > input) {
      tmpSum -= tmp[lp++];
    } else {
      answer++;
      tmpSum -= tmp[lp++];
    }
  }

  return answer;
}

console.log(solution(450));
