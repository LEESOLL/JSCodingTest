// 인프런 코테강의 7. 회문 문자열
function solution(input) {
  let arr = input.toLowerCase().split("");

  return arr === arr.reverse() ? "YES" : "NO";
}

console.log(solution("gooG"));
