// 프로그래머스 Lv.0 커피 심부름
// 아메리카노 - 4500, 라떼 - 5000
// 아무거나 - 4500
function solution(order) {
  var answer = 0;

  order.forEach((item) => {
    item.includes("cafelatte") ? (answer += 5000) : (answer += 4500);
  });

  return answer;
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
);
console.log(solution(["americanoice", "americano", "iceamericano"]));
