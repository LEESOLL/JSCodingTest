// 인프런 코테강의 5-7. 교육과정 설계
// 1년 과정 수업계획 짜야함
// 필수과목, 순서 정해져 있음
// 순서대로 잘 짜여 있으면 YES, 아니면 NO 출력
function solution(input1, input2) {
  const queue = input1.split("");

  for (const char of input2) {
    if (queue.includes(char)) {
      if (char !== queue[0]) return "NO";
      queue.shift();
    }
  }

  return queue.length === 0 ? "YES" : "NO";
}

console.log(solution("CBA", "CBDAGE"));
