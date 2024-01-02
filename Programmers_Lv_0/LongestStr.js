// 프로그래머스 Lv.0 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
function solution(myString, pat) {
  //   let reversedPat = [...pat].reverse().join("");
  //   let reversedStr = [...myString].reverse().join("");
  //   let reverseIdx = reversedStr.indexOf(reversedPat);

  //   return [...reversedStr.slice(reverseIdx)].reverse().join("");

  return myString.slice(0, myString.lastIndexOf(pat)) + pat;
}

console.log(solution("AbCdEFG", "dE"));
console.log(solution("AAAAaaaa", "a"));
