// 프로그래머스 Lv.0 조건에 맞게 수열 변환하기 3
// 정수배열 arr, 자연수 k 주어짐
// k가 홀수 -> arr 에 k 곱함
// k가 짝수 -> arr 에 k 더함
function solution(arr, k) {
  return k % 2 === 1
    ? arr.map((item) => item * k)
    : arr.map((item) => item + k);
}

console.log(solution([1, 2, 3, 100, 99, 98], 3));
console.log(solution([1, 2, 3, 100, 99, 98], 2));
