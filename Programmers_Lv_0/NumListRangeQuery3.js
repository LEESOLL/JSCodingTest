// 프로그래머스 Lv.0 수열과 구간 쿼리 3
// query [i,j] -> arr[i]와 arr[j]값을 서로 바꿔줌
function solution(arr, queries) {
  //   for (let i = 0; i < queries.length; i++) {
  //     [arr[queries[i][0]], arr[queries[i][1]]] = [
  //       arr[queries[i][1]],
  //       arr[queries[i][0]],
  //     ];
  //   }

  // item 을 구조분해 해줘서 사용하기!
  queries.forEach(([a, b]) => {
    [arr[a], arr[b]] = [arr[b], arr[a]];
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 3, 4],
    [
      [0, 3],
      [1, 2],
      [1, 4],
    ]
  )
);
