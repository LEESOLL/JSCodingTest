// 인프런 코테강의 6. 중복문자제거
function solution(str) {
  let answer = [];

  for (let i = 0; i < str.length; i++) {
    if (!answer.includes(str[i])) {
      answer.push(str[i]);
    }
  }

  return answer.join("");
}

console.log(solution("ksekkset"));
