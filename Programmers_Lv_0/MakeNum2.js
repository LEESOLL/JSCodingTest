// 프로그래머스 Lv.0 수 조작하기 2
// numLog[0] 에서부터 수 시작
// w -> +1
// s -> -1
// d -> +10
// a -> -10
function solution(numLog) {
  var answer = "";

  for (let i = 0; i < numLog.length - 1; i++) {
    if (numLog[i + 1] === numLog[i] + 1) {
      answer += "w";
    } else if (numLog[i + 1] === numLog[i] - 1) {
      answer += "s";
    } else if (numLog[i + 1] === numLog[i] + 10) {
      answer += "d";
    } else if (numLog[i + 1] === numLog[i] - 10) {
      answer += "a";
    }
  }

  return answer;
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1]));
