// 인프런 코테강의 1-5.특정 문자 뒤집기
function solution(str) {
  let answer = "";

  let arr = str.split("");
  let lp = 0;
  let rp = arr.length - 1;

  while (lp < arr.length / 2) {
    if (arr[lp].charCodeAt() > 64 && arr[lp].charCodeAt() < 123) {
      if (arr[rp].charCodeAt() > 64 && arr[rp].charCodeAt() < 123) {
        let tmp = arr[lp];
        arr[lp] = arr[rp];
        arr[rp] = tmp;
        rp--;
        lp++;
      } else {
        rp--;
      }
    } else {
      lp++;
    }
  }

  answer = arr.join("");
  return answer;
}

console.log(solution("a#b!GE*T@S"));
// 65, 122
