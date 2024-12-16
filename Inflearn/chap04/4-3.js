// 인프런 코테강의 4-3. 매출액의 종류
// K일 동안의 매출액의 종류
// 각 구간 별 매출액 종류

const { stringToNumArr } = require("../../convertStringToArr");

function solution(k, input) {
  let answer = [];
  let tmpMap = new Map();

  let lt = 0;

  for (let i = 0; i < k; i++) {
    tmpMap.set(input[i], (tmpMap.get(input[i]) || 0) + 1); // 초기 윈도우 맵 살정
  }

  answer.push(tmpMap.size);

  for (let rt = k; rt < input.length; rt++) {
    lt = rt - k;
    tmpMap.set(input[lt], tmpMap.get(input[lt]) - 1);
    tmpMap.set(input[rt], (tmpMap.get(input[rt]) || 0) + 1);

    if (tmpMap.get(input[lt]) === 0) {
      tmpMap.delete(input[lt]);
    }

    answer.push(tmpMap.size);
  }

  return answer;
}

console.log(solution(4, [20, 12, 20, 10, 23, 17, 10]));
console.log(
  solution(
    10,
    [
      365, 50, 50, 150, 60, 150, 154, 215, 150, 315, 293, 226, 408, 11, 344,
      199, 313, 82, 394, 304,
    ]
  )
);
