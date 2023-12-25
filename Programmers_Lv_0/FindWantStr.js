// 프로그래머스 Lv.0 원하는 문자열 찾기
function solution(myString, pat) {
  return myString.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0;
}
