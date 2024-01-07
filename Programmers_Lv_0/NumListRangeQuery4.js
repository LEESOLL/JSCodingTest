// 프로그래머스 Lv.0 수열과 구간 쿼리 4
// queries [s, e, k]
// s <= i <= e 인 모든 i에 대해 i가 k의 배수이면 arr[i]에 1 더함
// 구조 분해 할당을 잘 써보자!!!!
function solution(arr, queries) {
  var answer = [...arr];

  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        answer[i]++;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);
