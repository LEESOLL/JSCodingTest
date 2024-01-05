// 프로그래머스 Lv.0 진료순서 정하기
// 원소가 클 수록 순서도 높음
// sort 후 각 인덱스 배열 리턴하면 될듯
function solution(emergency) {
  let sortedArr = [...emergency].sort((a, b) => b - a);

  return emergency.map((item) => {
    return sortedArr.indexOf(item) + 1;
  });
}

console.log(solution([3, 76, 24]));
console.log(solution([1, 2, 3, 4, 5, 6, 7]));
console.log(solution([30, 10, 23, 6, 100]));
