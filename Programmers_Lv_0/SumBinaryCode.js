// 프로그래머스 Lv.0 이진수 더하기
function solution(bin1, bin2) {
  var answer = [];
  let sum = parseInt(bin1, 2) + parseInt(bin2, 2);
  let remainder = 0;

  if (sum === 0) return 0;
  else {
    while (sum > 0) {
      remainder = sum % 2;
      sum = Math.floor(sum / 2);
      answer.push(remainder);
    }

    return answer.reverse().join("");
  }
}

console.log(solution("10", "11"));
console.log(solution("1001", "1111"));
