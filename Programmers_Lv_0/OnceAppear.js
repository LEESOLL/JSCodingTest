// 프로그래머스 Lv.0 한 번만 등장한 문자
// s 에서 한번만 등장하는 문자를 사전순으로 정렬한 문자 return
// key - 문자, value - 문자카운트 로 된 객체 만든 후 key return ?
function solution(s) {
  var answer = [];
  //   let sArr = [...s].sort();

  //   for (let i = 0; i < sArr.length; i++) {
  //     if (i === 0) {
  //       if (sArr[i] !== sArr[i + 1]) {
  //         answer += sArr[i];
  //       }
  //     } else if (i === sArr.length - 1) {
  //       if (sArr[i] !== sArr[i - 1]) {
  //         answer += sArr[i];
  //       }
  //     } else {
  //       if (sArr[i] !== sArr[i - 1] && sArr[i] !== sArr[i + 1]) {
  //         answer += sArr[i];
  //       }
  //     }
  //   }
  for (let c of s) {
    s.indexOf(c) === s.lastIndexOf(c) ? answer.push(c) : "";
  }
  return answer.sort().join("");
}

console.log(solution("abcabcadc"));
console.log(solution("abdc"));
console.log(solution("hello"));
