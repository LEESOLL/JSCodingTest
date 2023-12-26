// 프로그래머스 Lv.0 가까운 1 찾기
// idx 보다 크면서 값이 1 인 가장 작은 인덱스 반환
function solution(arr, idx) {
  let newArr = arr.slice(idx);

  return newArr.includes(1) ? newArr.indexOf(1) + idx : -1;
}

console.log(solution([0, 0, 0, 1], 1));
console.log(solution([1, 0, 0, 1, 0, 0], 4));
console.log(solution([1, 1, 1, 1, 0], 3));
