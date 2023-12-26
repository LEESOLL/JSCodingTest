// 프로그래머스 Lv.0 A 강조하기
// a -> A
// 나머지 알파벳 -> 소문자 변환
function solution(myString) {
  let regex = /a/gi;

  return myString.toLowerCase().replaceAll(regex, "A");
}

console.log(solution("abstract algebra"));
console.log(solution("PrOgRaMmErS"));
