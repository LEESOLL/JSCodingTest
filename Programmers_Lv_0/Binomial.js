// 프로그래머스 Lv.0 간단한 식 계산하기
function solution(binomial) {
  var answer = 0;

  let arr = binomial.split(" ");

  for (let i = 0; i < 3; i++) {
    switch (arr[1]) {
      case "+":
        answer = parseInt(arr[0]) + parseInt(arr[i]);
        break;
      case "-":
        answer = parseInt(arr[0]) - parseInt(arr[i]);
        break;
      case "*":
        answer = parseInt(arr[0]) * parseInt(arr[i]);
        break;
    }
  }

  return answer;
}

console.log(solution("43 + 12"));
console.log(solution("0 - 7777"));
console.log(solution("40000 * 40000"));
