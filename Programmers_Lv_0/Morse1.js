// 프로그래머스 Lv.0 모스부호 (1)
function solution(letter) {
  var answer = "";
  let morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  let charArr = letter.split(" ");

  charArr.forEach((item) => {
    answer += morse[item];
  });

  return answer;
}

console.log(solution(".... . .-.. .-.. ---"));
console.log(solution(".--. -.-- - .... --- -."));
