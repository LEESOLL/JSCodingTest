// 인프런 코테강의 2-8. 등수구하기
// 점수 주어지면 각 학생의 등수 출력하기
// 첫번째로 나오는 인덱스 + 1 부여하면 될듯
function solution(input) {
  let answer = [];

  let inputArr = input.split(" ");
  let tmpArr = input.split(" ").sort((a, b) => b - a);

  for (let i = 0; i < inputArr.length; i++) {
    answer.push(tmpArr.findIndex((item) => item == inputArr[i]) + 1);
  }

  return answer;
}

console.log(
  solution(
    "77 89 53 63 71 61 82 96 65 65 65 62 78 58 64 81 54 94 77 55 67 74 75 96 89 82 94 89 53 50 66 60 87 81 78 61 61 78 87 93 74 90 88 63 96 76 70 67 61 58 94 70 94 90 76 76 54 54 52 69 71 97 51 71 86 81 97 68 63 82 87 52 92 54 73 90 57 92 64 90 58 53 76 58 77 70 52 56 77 94 69 72 63 71 67 88 71 92 93 57"
  )
);
