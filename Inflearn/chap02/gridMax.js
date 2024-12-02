// 인프런 코테강의 2-9. 격자판 최대합
// 행, 열, 대각선 합 중 가장 큰 합 출력
function solution(input) {
  let answer = 0;

  let col = 0,
    row = 0,
    cross = 0;
  reverseCross = 0;

  for (let i = 0; i < input.length; i++) {
    col = 0;
    row = 0;
    for (let j = 0; j < input[i].length; j++) {
      col += input[j][i];
      row += input[i][j];
    }
    cross += input[i][i];
    reverseCross += input[input.length - i - 1][input.length - i - 1];
    answer = Math.max(col, row, cross, reverseCross);
  }

  return answer;
}

console.log(
  solution([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
console.log(
  solution([
    [75, 79, 6, 72, 40, 72, 28, 43, 64, 19],
    [97, 71, 12, 48, 64, 95, 64, 40, 38, 24],
    [52, 17, 58, 64, 13, 37, 38, 5, 30, 36],
    [43, 30, 15, 8, 13, 21, 81, 29, 79, 33],
    [20, 4, 31, 24, 93, 60, 61, 19, 9, 88],
    [12, 33, 30, 4, 38, 62, 98, 34, 65, 33],
    [37, 26, 6, 60, 82, 57, 49, 85, 66, 67],
    [93, 4, 29, 67, 65, 96, 5, 27, 39, 87],
    [16, 52, 8, 7, 56, 19, 8, 53, 52, 93],
    [87, 55, 58, 84, 61, 92, 3, 74, 66, 34],
  ])
);
