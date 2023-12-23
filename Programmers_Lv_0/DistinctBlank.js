// 프로그래머스 Lv.0 공백으로 구분하기 2
// my_string 에 있는 단어 배열에 담기
function solution(my_string) {
  let answer = [];
  let tmpStr = my_string.charAt(0) === " " ? "" : my_string.charAt(0);

  for (let i = 1; i < my_string.length; i++) {
    if (my_string.charAt(i) === " ") {
      if (my_string.charAt(i - 1) === " ") continue;
      else {
        answer.push(tmpStr);
        tmpStr = "";
      }
    } else {
      tmpStr += my_string.charAt(i);
    }
  }

  if (tmpStr.length > 0) answer.push(tmpStr);

  return answer;
}
console.log(solution(" i    love  you"));
console.log(solution("    programmers  "));
