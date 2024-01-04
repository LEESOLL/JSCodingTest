// 프로그래머스 Lv.0 문자열이 몇 번 등장하는지 세기
function solution(myString, pat) {
  var answer = 0;

  for (let i = 0; i < myString.length - pat.length + 1; i++) {
    if (myString.slice(i, i + pat.length) == pat) answer++;
  }

  return answer;
}

console.log(solution("banana", "ana"));
console.log(solution("aaaa", "aa"));
