// 인프런 코테강의 2-4. 피보나치 수열
// 앞의 두개의 수를 합하여 다음 수가 되는 수열
function solution(input) {
  let answer = [1, 1];

  let num = Number(answer[0]) + Number(answer[1]);
  answer.push(num);

  for (let i = 2; i < input - 1; i++) {
    num = Number(answer[i - 1]) + Number(answer[i]);
    answer.push(num);
  }

  return answer;
}

console.log(solution(43));
