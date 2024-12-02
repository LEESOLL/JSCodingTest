// 인프런 코테강의 1-12. 암호
// 알파벳 한문자 당 #, * 7개로 구성
// # -> 1, * -> 0
// 7씩 나눠야겠지
function solution(input) {
  let answer = "";
  let tmp = "";
  let tmpToBinary = "";

  for (let i = 0; i < input.length / 7; i++) {
    for (let j = 7 * i; j < 7 * (i + 1); j++) {
      tmp += input[j];
    }
    tmpToBinary = tmp.replaceAll("#", 1).replaceAll("*", 0);
    answer += String.fromCharCode(parseInt(tmpToBinary, 2));
    tmp = "";
  }

  return answer;
}

console.log(
  solution("#**#**##*#*#**#**#**##*#**###*#*#**#**#**##**##*##***#*#")
);
