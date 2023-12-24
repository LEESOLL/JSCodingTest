// 프로그래머스 Lv.0 뒤에서 5등 위로
// num_list 에서 오름차순 후 아래5개 빼고 리턴
function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(5);
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10]));
