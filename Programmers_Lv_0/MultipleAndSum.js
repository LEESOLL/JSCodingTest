// 프로그래머스 LV.0 원소들의 곱과 합
// 정수 배열 num_list 에서 모든 원소들의 곱이 모든원소의 합의 제곱보다 작으면 1, 크면 0 리턴
function solution(num_list) {
  let multiple = 1;
  let sum = 0;

  num_list.forEach((item) => {
    multiple *= item;
    sum += item;
  });

  console.log(multiple);
  console.log(Math.pow(sum, 2));

  return multiple > Math.pow(sum, 2) ? 0 : 1;
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
