// 프로그래머스 Lv.0 배열 만들기 5
// inStrs의 각 원소마다 s번째 인덱스부터 l만큼 자른 값을
// 정수로 변환했을 때 k보다 크면 answer 배열에 추가
function solution(intStrs, k, s, l) {
  let answer = [];
  intStrs.forEach((item) => {
    if (parseInt(item.slice(s, s + l)) > k)
      answer.push(parseInt(item.slice(s, s + l)));
  });
  return answer;
}

console.log(
  solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
);
