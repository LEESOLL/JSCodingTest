// 프로그래머스 Lv.0 리스트 자르기
// 구조분해할당!
// slicer [a, b, c]
// n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지 자르기
// n = 2 : a번 인덱스부터 마지막까지 자르기
// n = 3 : a번 인덱스부터 b번 인덱스까지
// n = 4 : a번 인덱스부터 b번 인덱스까지 c 간격으로 자르기
function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => idx % c === 0);
    default:
      return [];
  }
}

console.log(solution(3, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution(4, [1, 5, 2], [1, 2, 3, 4, 5, 6, 7, 8, 9]));
