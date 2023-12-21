// 프로그래머스 Lv.0 조건에 맞게 수열 반환하기 1
// 정수배열 arr
// 원소 >= 50 인 짝수 -> 2로 나눔
// 아니면 2곱함
// map 사용
function solution(arr) {
  return arr.map((item) => {
    if (item >= 50 && item % 2 === 0) return item / 2;
    if (item < 50 && item % 2 === 1) return item * 2;
    return item;
  });
}

console.log(solution([1, 2, 3, 100, 99, 98]));
