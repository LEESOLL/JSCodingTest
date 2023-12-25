// 프로그래머스 Lv.0 순서 바꾸기
function solution(num_list, n) {
  return num_list.slice(n).concat(num_list.slice(0, n));
}

console.log(solution([2, 1, 6], 1));
console.log(solution([5, 2, 1, 7, 5], 3));
