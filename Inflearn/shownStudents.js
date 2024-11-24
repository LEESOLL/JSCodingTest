// 인프런 코테강의 2-2. 보이는 학생
// 앞에 서있는 사람들보다 크면 보이고, 작거나 같으면 안보임
// Max 보다 작거나 같으면 안보임
function solution(input) {
  let answer = 1;
  let tmpArr = input.split(" ");

  let max = parseInt(tmpArr[0]);

  for (let i = 1; i < tmpArr.length; i++) {
    if (parseInt(tmpArr[i]) > max) {
      max = parseInt(tmpArr[i]);
      answer++;
    }
  }

  return answer;
}

console.log(solution(""));
