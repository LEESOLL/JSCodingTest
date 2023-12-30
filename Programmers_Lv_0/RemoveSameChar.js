// 프로그래머스 Lv.0 중복된 문자 제거
// 2 번 풀이 Set 사용(중복 제거)
function solution(my_string) {
  // 1.
  //   let charArr = [my_string[0]];
  //   for (let i = 1; i < my_string.length; i++) {
  //     if (charArr.includes(my_string[i])) {
  //       continue;
  //     } else {
  //       charArr.push(my_string[i]);
  //     }
  //   }
  //   return charArr.join("");

  // 2.
  return [...new Set(my_string)].join("");
}

console.log(solution("people"));
console.log(solution("We are the world"));
