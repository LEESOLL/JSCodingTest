// 인프런 코테강의 3-1. 두 배열 합치기
// 오름차순으로 정렬된 두 배열 오름차순으로 합치기
// 투 포인터스 알고리즘으로 구해라
function solution(input1, input2) {
  //   let answer = input1.concat(input2).sort((a, b) => a - b);

  let answer = [];

  let p1 = 0;
  let p2 = 0;

  let n = input1.length;
  let m = input2.length;

  while (p1 < n && p2 < m) {
    if (input1[p1] < input2[p2]) {
      answer.push(input1[p1++]);
    } else {
      answer.push(input2[p2++]);
    }
  }

  while (p1 < n) answer.push(input1[p1++]);
  while (p2 < m) answer.push(input2[p2++]);

  return answer;
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));
console.log(
  solution([1, 10, 27, 39, 50, 61, 65, 70, 93, 93], [7, 51, 65, 66, 70, 82, 93])
);
