// 프로그래머스 Lv.0 1로 만들기
function solution(num_list) {
  var answer = 0;

  num_list.forEach((item) => {
    while (item > 1) {
      if (item % 2 === 0) {
        item /= 2;
        answer++;
      } else {
        item = (item - 1) / 2;
        answer++;
      }
    }
  });

  return answer;
}

console.log(solution([12, 4, 15, 1, 14]));
