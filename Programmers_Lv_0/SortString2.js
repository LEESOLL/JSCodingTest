// 프로그래머스 Lv.0 문자열 잘라서 정렬하기
// x 를 기준으로 문자열 잘라서 사전순 정렬 한 배열 리턴
function solution(myString) {
  return myString
    .split("x")
    .sort()
    .filter((item) => item !== "");
}

console.log(solution("axbxcxdx"));
console.log(solution("dxccxbbbxaaaa"));
