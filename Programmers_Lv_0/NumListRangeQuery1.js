// 프로그래머스 Lv.0 수열과 구간 쿼리 1
// 정수배열 arr, 이차원 정수 배열 queries
function solution(arr, queries) {
  var answer = [...arr];

  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      answer[j] = answer[j] + 1;
    }
  }

  return answer;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ]
  )
);
