// 프로그래머스 Lv.0 가까운 수
// array 의 원소 중 n 이랑 제일 가까운 수 리턴
// -> 두 수의 차의 절댓값이 가장 작은 수 리턴
// function solution(array, n) {
//   var answer = 0;
//   let beforeAbs = Number.MAX_VALUE;
//   let sortedArr = array.sort((a, b) => a - b);

//   for (let i = 0; i < sortedArr.length; i++) {
//     let afterAbs = Math.abs(sortedArr[i] - n);
//     if (afterAbs < beforeAbs) {
//       answer = sortedArr[i];
//       beforeAbs = afterAbs;
//     }
//   }

//   return answer;
// }

function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b); // 절댓값이 작은 것부터 오름차순 정렬, 같다면 그냥 오름차순 정렬?
  //   console.log(array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b)));

  return array[0];
}

console.log(solution([3, 10, 28], 20));
console.log(solution([10, 11, 12], 13));
