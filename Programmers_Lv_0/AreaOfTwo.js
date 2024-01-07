// 프로그래머스 Lv.0 2의 영역
// arr 안에서 2 가 모두 포함된 가장 작은 연속된 부분 배열 return
// 2 가 없으면 -1 리턴
// 2로 시작하고 2 로 끝나야되네
// 만약 2의 indexOf 와 2의 lastIndexOf가 같으면 걍 2 리턴
function solution(arr) {
  let answer = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
  return answer.length === 0 ? [-1] : answer;
}

console.log(solution([1, 2, 1, 4, 5, 2, 9]));
console.log(solution([1, 2, 1]));
console.log(solution([1, 1, 1]));
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1]));
