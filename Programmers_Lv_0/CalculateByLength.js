// 프로그래머스 Lv.0 길이에 따른 연산
// num_list 길이 11 이상 -> 모든 원소의 합
// num_list 길이 10 이하 -> 모든 원소의 곱
// arr.reduce 써보자
function solution(num_list) {
  if (num_list.length > 10) {
    return num_list.reduce((acc, cur) => acc + cur, 0);
  } else {
    return num_list.reduce((acc, cur) => acc * cur, 1);
  }
}

console.log(solution([3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1]));
console.log(solution([2, 3, 4, 5]));
