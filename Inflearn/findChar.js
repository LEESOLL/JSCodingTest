// 인프런 코테강의 1. 문자 찾기
function solution(str, char) {
  var answer = 0;

  for (let i = 0; i < str.length; i++) {
    if (str.toLowerCase()[i] === char) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("computerprogramming", "r"));
