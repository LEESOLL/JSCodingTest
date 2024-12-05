// 인프런 코테강의 3-4. 연속 부분 수열
// 수열에서 연속부분수열의 합이 M이 되는 경우가 몇번있는지
// 슬라이딩 윈도우, m 보다 작으면 하나 더하고, m 보다 크면 맨앞 빼기

const { stringToNumArr } = require("../../convertStringToArr");

function solution(m, input) {
  let answer = 0;

  let tmp = 0;
  let lp = 0;
  let rp = 0;

  while (rp < input.length) {
    if (tmp < m) {
      tmp += input[rp++];
    } else {
      tmp -= input[lp++];
    }

    if (tmp === m) {
      answer++;
    }
  }

  return answer;
}

console.log(
  solution(
    100,
    stringToNumArr(
      "3 3 1 4 5 2 2 5 2 1 2 2 1 1 4 1 4 3 3 5 1 5 1 3 4 5 4 5 2 4 2 1 1 4 2 1 5 3 1 3 1 1 1 2 4 4 5 5 5 5 3 2 5 5 3 2 3 4 1 3 3 4 5 1 3 1 3 2 3 1 2 3 2 5 5 4 2 3 1 2 3 2 4 5 2 4 4 4 4 3 1 5 2 2 1 3 2 5 4 1"
    )
  )
);
