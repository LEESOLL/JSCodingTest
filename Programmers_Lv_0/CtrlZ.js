// 프로그래머스 Lv.0 컨트롤 제트
// reduce 써보자
function solution(s) {
  var answer = 0;

  let sArr = s.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "Z") {
      answer = answer - sArr[i - 1];
    } else {
      answer += Number(sArr[i]);
    }
  }

  return answer;
}

console.log(solution("1 2 Z 3"));
console.log(solution("10 20 30 40"));
console.log(solution("10 Z 20 Z 1"));
console.log(solution("10 Z 20 Z"));
console.log(solution("-1 -2 -3 Z"));
