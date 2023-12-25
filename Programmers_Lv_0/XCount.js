// 프로그래머스 Lv.0 x 사이의 개수
function solution(myString) {
  //   var answer = [];
  //   myString.split("x").forEach((item) => {
  //     answer.push(item.length);
  //   });
  //   return answer;
  return myString.split("x").map((item) => item.length);
}

console.log(solution("oxooxoxxox"));
console.log(solution("xabcxdefxghi"));
