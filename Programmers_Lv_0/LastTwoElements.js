// 프로그래머스 Lv.0 마지막 두 원소
// 정수리스트 num_list 주어짐
// 마지막 원소 > 그 전 원소 ? 마지막원소 - 그전원소 : 마지막원소 * 2
function solution(num_list) {
  let last = num_list[num_list.length - 1];
  let secondLast = num_list[num_list.length - 2];

  last > secondLast
    ? num_list.push(last - secondLast)
    : num_list.push(last * 2);

  return num_list;
}

console.log(solution([2, 1, 6]));
console.log(solution([5, 2, 1, 7, 5]));
