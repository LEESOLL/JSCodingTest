// 프로그래머스 Lv.0 숨어있는 숫자의 덧셈(2)
// 연속된 수는 하나의 숫자로 간주
function solution(my_string) {
  var answer = 0;

  // let tmpStr = "";

  // for (let i = 0; i < my_string.length; i++) {
  //   if (Number.isInteger(parseInt(my_string[i]))) {
  //     tmpStr += my_string[i];
  //   } else {
  //     if (tmpStr.length > 0) {
  //       answer += parseInt(tmpStr);
  //       tmpStr = "";
  //     }
  //   }
  // }
  // if (tmpStr.length > 0) {
  //   answer += parseInt(tmpStr);
  // }
  // return answer;

  console.log(Number("")); // 0나옴

  return my_string.split(/[A-z]/).reduce((acc, cur) => acc + Number(cur), 0);
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123Z"));
