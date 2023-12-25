// 프로그래머스 Lv.0 배열의 원소 삭제하기
// arr 에서 delete_list 에 해당하는 원소 삭제하고 남은 배열 리턴
function solution(arr, delete_list) {
  return arr.filter((item) => !delete_list.includes(item));
}

console.log(solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12]));
console.log(solution([110, 66, 439, 785, 1], [377, 823, 119, 43]));
