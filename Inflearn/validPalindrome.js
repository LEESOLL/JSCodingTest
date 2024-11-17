// 인프런 코테강의 8. 유효한 팰린드롬
function solution(input) {
  // 알파벳만, 대소문자 구분 X
  let answer;

  let arr = input
    .replace(/[^a-zA-z]/g, "")
    .toLowerCase()
    .split("");

  return arr.join("") === arr.reverse().join("") ? "YES" : "NO";
}

console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
console.log(solution("Tae,aba;e#%a*T"));
console.log(solution("kdjg$@kjkldjkg%@dkjgkj"));
