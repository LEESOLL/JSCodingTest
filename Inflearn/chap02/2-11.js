// 인프런 코테강의 2-11.임시반장 정하기
// 반 학생 중 한번이라도 같은 반이었던 사람이 가장 많은 학생 , 중복 사람 제거
// j 행 돌면서 같은 숫자 나오면 카운트 헤서 배열에 저장, 젤 높은 값을 가진 인덱스 출력
function solution(input) {
  let answer = 0;

  let cnt = 0;
  let max = Number.MIN_VALUE;

  for (let i = 0; i < input.length; i++) {
    cnt = 0;
    for (let j = 0; j < input.length; j++) {
      if (i !== j) {
        for (let k = 0; k < 5; k++) {
          if (input[i][k] === input[j][k]) {
            cnt++;
            break;
          }
        }
      }
    }

    if (cnt > max) {
      max = cnt;
      answer = i + 1;
    }
  }

  return answer;
}

console.log(
  solution([
    [2, 3, 1, 7, 3],
    [4, 1, 9, 6, 8],
    [5, 5, 2, 4, 4],
    [6, 5, 2, 6, 7],
    [8, 4, 2, 2, 2],
  ])
);
console.log(
  solution([
    [9, 8, 7, 6, 5],
    [5, 6, 7, 8, 9],
    [1, 2, 3, 7, 8],
    [4, 5, 3, 4, 2],
    [6, 2, 8, 4, 2],
  ])
);
console.log(
  solution([
    [5, 4, 4, 2, 1],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 7, 8],
  ])
);
