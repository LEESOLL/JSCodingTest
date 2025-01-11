// 인프런 코테강의 4-5. K번째 큰 수
// 1부터 100 사이의 자연수 적힌 N장 카드
// 이 중 3장을 뽑아 합을 기록
// 3장을 뽑을 수 있는 모든 경우 기록
// 기록한 값 중 K 번째로 큰 수 출력

// 강의: Set 이용 -> 중복제거 자료구조
const { stringToNumArr } = require("../../convertStringToArr");

function solution(k, input) {
  let answer = -1;

  let set = new Set();
  let tmpSum = 0;

  // 모든 경우의 수 담은 set 생성
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let k = j + 1; k < input.length; k++) {
        tmpSum = input[i] + input[j] + input[k];
        set.add(tmpSum);
      }
    }
  }

  const setToArr = Array.from(set).sort((a, b) => b - a);

  if (setToArr[k - 1]) {
    answer = setToArr[k - 1];
  }

  return answer;
}

console.log(
  solution(
    20,
    stringToNumArr(
      "38 46 54 33 34 23 48 50 23 26 46 47 25 48 35 48 32 30 50 28 39 34 24 28 26 53 18 24 52 41 41 33 23 52 27 22 45 30 52 19 40 48 45 23 21 45 19 20 38 21 19 21 31 40 53 27 49 48 30 32"
    )
  )
);
console.log(solution(3, stringToNumArr("13 15 34 23 45 65 33 11 26 42")));
console.log(solution(1200, stringToNumArr("23 26 50 17 34 35 50 22 53 41"))); //-1
console.log(
  solution(
    30,
    stringToNumArr(
      "50 53 20 23 42 54 44 18 53 27 44 23 43 20 48 22 50 45 44 52 37 49 15 23 53 21 29 47 53 51 54 22 50 25 49 33 34 49 53 47 20 42 41 41 25 15 25 51 33 38 44 35 49 35 53 47 19 22 31 27 47 18 44 51 25 16 47 46 43 20 49 44 20 29 33 25 25 19 23 50 35 20 35 47 33 32 13 26 39 22 16 32 39 38 35 29 24 16 48 29"
    )
  )
);
console.log(
  solution(
    30,
    stringToNumArr(
      "31 40 40 49 44 53 41 25 35 53 28 36 50 38 27 23 50 42 51 20 37 48 22 37 23 42 23 39 28 30 31 18 24 41 48 40 21 25 25 28 24 41 49 30 36 35 15 52 36 17 49 26 43 44 43 37 30 41 35 20 28 25 51 16 45 15 54 54 17 40 47 27 42 22 54 47 29 29 36 29 53 42 49 42 49 16 44 36 30 45"
    )
  )
);
