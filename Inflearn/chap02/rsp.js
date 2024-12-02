// 인프런 코테강의 2-3. 가위 바위 보
// A, B, D
// 1: 가위, 2: 바위, 3: 보
function solution(input) {
  let answer = "";

  let a = "";
  let b = "";

  for (let j = 0; j < input[0].length; j++) {
    a = input[0][j];
    b = input[1][j];

    if (a == b) answer += "D"; // 11 22 33
    else {
      if (a == 1) {
        // 12 13
        if (b == 2) answer += "B";
        else answer += "A";
      } else if (a == 2) {
        //21 23
        if (b == 1) answer += "A";
        else answer += "B";
      } else if (a == 3) {
        //31, 32
        if (b == 1) answer += "B";
        else answer += "A";
      }
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 2, 1, 2, 1, 3, 3, 2, 3, 1],
    [3, 3, 3, 2, 3, 3, 2, 3, 2, 3],
  ])
);
