// 인프런 코테강의 2-1. 큰 수 출력하기
// 자신의 바로 앞 수 보다 큰 수만 출력
// 첫번째 수는 무조건 출력
function solution(input) {
  let tmpArr = input.split(" ");

  let answer = tmpArr[0];

  for (let i = 1; i < tmpArr.length; i++) {
    if (parseInt(tmpArr[i - 1]) < parseInt(tmpArr[i])) {
      answer += tmpArr[i];
    }
  }

  return answer;
}

console.log(solution("7 3 9 5 6 12"));
