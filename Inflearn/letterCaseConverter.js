// 인프런 코테강의 2. 대소문자 변환
function solution(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt() > 96) {
      answer += str[i].toUpperCase();
    } else {
      answer += str[i].toLowerCase();
    }
  }
  return answer;
}

console.log(solution("StuDY"));
