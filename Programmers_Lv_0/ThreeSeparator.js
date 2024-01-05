// 프로그래머스 Lv.0 세 개의 구분자
// "a", "b", "c" 를 구분자로 사용
function solution(myStr) {
  answer = myStr.split(/[a, b, c]/).filter((item) => item !== "");

  return answer.length === 0 ? ["EMPTY"] : answer;
}

console.log(solution("baconlettucetomato"));
console.log(solution("abcd"));
console.log(solution("cabab"));
