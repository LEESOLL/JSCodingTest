// 인프런 코테강의 2-7. 점수계산
// 연속적으로 맞히면 가산점
// k 번 연속으로 답 맞추먼 k점
function solution(input) {
  let answer = 0;

  let tmpArr = input.split(" ");

  console.log(tmpArr);

  answer += Number(tmpArr[0]);

  let gasan = 0;

  for (let i = 1; i < tmpArr.length; i++) {
    if (tmpArr[i - 1] == 1) {
      if (tmpArr[i] == 1) {
        gasan++;
        answer += Number(tmpArr[i]) + gasan;
      } else {
        gasan = 0;
      }
    } else answer += Number(tmpArr[i]);
  }

  return answer;
}

console.log(
  solution(
    "0 0 1 1 1 0 1 1 1 1 1 1 0 1 0 1 0 1 1 0 0 1 1 0 1 0 1 1 1 0 1 1 1 1 1 1 0 0 0 0 0 0 0 1 0 1 1 1 1 0 1 1 0 0 0 0 0 1 0 1 1 0 1 0 1 1 1 1 1 0 0 0 1 1 1 0 1 0 1 1 0 1 1 0 1 0 0 1 0 1 1 0 1 1 0 1 0 0 1 1"
  )
);
