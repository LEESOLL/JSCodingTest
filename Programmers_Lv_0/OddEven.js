// 프로그래머스 Lv.0 홀수 vs 짝수
// 가장 첫번째 원소를 1번째 원소
// 홀수번째 원소들 합과 짝수번째 원소들 합 중 큰 값 리턴
function solution(num_list) {
  // 1.
  let even = 0;
  let odd = 0;
  //   for (let i = 0; i < num_list.length; i += 2) {
  //     odd += num_list[i];
  //   }
  //   for (let i = 1; i < num_list.length; i += 2) {
  //     even += num_list[i];
  //   }

  // 2.
  num_list.forEach((item, idx) => {
    idx % 2 === 1 ? (even += item) : (odd += item);
  });

  return odd > even ? odd : even;
}

console.log(solution([4, 2, 6, 1, 7, 6]));
console.log(solution([-1, 2, 5, 6, 3]));
