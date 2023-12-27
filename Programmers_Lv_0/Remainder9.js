// 프로그래머스 Lv.0 9로 나눈 나머지
function solution(number) {
  let tmpNum = 0;

  for (let i = 0; i < number.length; i++) {
    tmpNum += parseInt(number[i]);
  }

  return tmpNum % 9;
}

console.log(solution("123"));
console.log(solution("78720646226947352489"));
