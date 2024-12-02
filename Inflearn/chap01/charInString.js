// 인프런 코테강의 1-3.문장 속 단어
function solution(input) {
  let answer = "";

  const charArr = input.split(" ");

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i].length > answer.length) {
      answer = charArr[i];
    }
  }

  return answer;
}

console.log(solution("it is time to study"));
console.log(solution("loveispower"));
console.log(
  solution("jddgshsgskjkdj dijglolkdwoig dkjkljglkd gksjlkjgls gkjldkjgla")
);
