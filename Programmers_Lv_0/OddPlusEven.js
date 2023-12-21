// 프로그래머스 Lv.0 이어 붙인 수
function solution(num_list) {
  let odd = "";
  let even = "";

  num_list.forEach((item) => {
    if (item % 2 === 0) {
      even += item;
    } else odd += item;
  });

  return parseInt(even) + parseInt(odd);
}

console.log(solution([3, 4, 5, 2, 1]));
console.log(solution([5, 7, 8, 3]));
