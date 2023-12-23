// 프로그래머스 Lv.0 배열의 원소만큼 추가하기
// 1. String 변환 후 repeat(charAt(i)) 해서 다시 split("") 하는 방법
// 2. for 문 돌면서 ... 흠 오케이
function solution(arr) {
  let answer = [];

  arr.forEach((item) => {
    let i = item;
    while (i > 0) {
      answer.push(item);
      i--;
    }
  });

  return answer;
}

console.log(solution([5, 1, 4]));
console.log(solution([6, 6]));
console.log(solution([1]));
