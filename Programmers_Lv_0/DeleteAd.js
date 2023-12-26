// 프로그래머스 Lv.0 ad 제거하기
// ad 가 들어있는 문자열 제거한 배열 리턴
function solution(strArr) {
  return strArr.filter((item) => !item.includes("ad"));
}

console.log(solution(["and", "notad", "abcd"]));
console.log(solution(["there", "are", "no", "a", "ds"]));
