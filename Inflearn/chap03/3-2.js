// 인프런 코테강의 3-2. 공통원소 구하기
// 두 집합의 공통 원소 추출하여 오름차순으로 출력
// 투 포인터스 알고리즘
const { stringToNumArr } = require("../../convertStringToArr");

function solution(input1, input2) {
  let answer = [];

  // 오름차순 정렬
  input1.sort((a, b) => a - b);
  input2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;

  let n = input1.length;
  let m = input2.length;

  while (p1 < n && p2 < m) {
    if (input1[p1] < input2[p2]) {
      p1++;
    } else if (input1[p1] > input2[p2]) {
      p2++;
    } else {
      answer.push(input1[p1]);
      p1++;
      p2++;
    }
  }

  return answer;
}

console.log(solution(stringToNumArr("1 3 9 5 2"), stringToNumArr("3 2 5 7 8")));
console.log(
  solution(
    stringToNumArr("999999999 1000000000 5"),
    stringToNumArr("999999999 1000000000 5 6 7")
  )
);
