// 인프런 코테강의 1-11. 문자열 압축
function solution(input) {
  let answer = "";

  let cnt = 1;
  let temp = input[0];

  for (let i = 1; i < input.length + 1; i++) {
    if (input[i] === temp) {
      cnt++;
    } else {
      answer += temp;
      if (cnt !== 1) {
        answer += cnt;
        cnt = 1;
      }
      temp = input[i];
    }
  }

  return answer;
}

console.log(solution("KKHSSSSSSSE"));
console.log(solution("KSTTTSEEKFKKKDJJGG"));
