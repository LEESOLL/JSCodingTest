// 프로그래머스 Lv.0 l로 바꾸기
// 알파벳 l 보다 앞서는 알파벳들 l로 바꾸기
// ascii 코드 써보자
function solution(myString) {
  //   var answer = "";

  //   for (let i = 0; i < myString.length; i++) {
  //     if (myString[i].charCodeAt() < "l".charCodeAt()) {
  //       answer += "l";
  //     } else {
  //       answer += myString[i];
  //     }
  //   }

  //   return answer;

  return myString.replace(/[a-k]/g, "l");
}

console.log(solution("abcdevwxyz"));
console.log(solution("jjnnllkkmm"));
