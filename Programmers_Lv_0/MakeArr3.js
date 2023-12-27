// 프로그래머스 Lv.0 배열 만들기 3
function solution(arr, intervals) {
  //   return [
  //     ...arr.slice(intervals[0][0], intervals[0][1] + 1),
  //     ...arr.slice(intervals[1][0], intervals[1][1] + 1),
  //   ];

  // 구조 분해 할당 !!
  const [[a, b], [c, d]] = intervals;

  return [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];
}

console.log(
  solution(
    [1, 2, 3, 4, 5],
    [
      [1, 3],
      [0, 4],
    ]
  )
);
