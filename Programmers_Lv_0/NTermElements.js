// 프로그래머스 Lv.0 n개 간격의 원소들
// num_list 에서 첫번째부터 마지막까지 n개 간격으로 저장된 원소 담은 배열 return
function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }

  return answer;
}

console.log(solution([4, 2, 6, 1, 7, 6], 2));
console.log(solution([4, 2, 6, 1, 7, 6], 4));
