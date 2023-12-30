// 프로그래머스 Lv.0 이차원 배열 대각선 순회하기
// 반례) k가 9인 경우 i 는 2까지밖에 안되는데 (마찬가지로 j도 3까지 밖에 안되는데) && 조건을 걸어주지 않으면
// 인덱스가 존재하지 않아도 계속 순회하기 때문에 런타임에러 발생!!
function solution(board, k) {
  var answer = 0;

  for (let i = 0; i <= k && i < board.length; i++) {
    for (let j = 0; j <= k - i && j < board[i].length; j++) {
      if (i + j <= k) answer += board[i][j];
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
);
