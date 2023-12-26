// 프로그래머스 Lv.0 5명씩
function solution(names) {
  let answer = [];

  for (let i = 0; i < names.length; i += 5) {
    answer.push(names[i]);
  }

  return answer;
}

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
);
