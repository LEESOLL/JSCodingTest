// 인프런 코테강의 3-3. 최대 매출
// k일 동안의 최대 매출액

const { stringToNumArr } = require("../../convertStringToArr");

function solution(k, input) {
  let answer = 0;

  let sp = 0;
  let ep = k;
  let tmp = 0;

  for (let i = 0; i < k; i++) {
    tmp += input[i]; // 처음 K일 동안의 합
  }

  while (ep < input.length) {
    if (tmp > answer) {
      answer = tmp;
    }
    tmp = tmp - input[sp++] + input[ep++];
  }

  return answer;
}

console.log(
  solution(
    3,
    stringToNumArr(
      "365 8 50 150 60 355 154 215 150 315 293 226 408 11 344 199 313 82 394 304"
    )
  )
);
