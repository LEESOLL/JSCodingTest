// 인프런 코테강의 5-6. 공주 구하기
// 왕자 n명, 왕자 결정
// k 번째 왕자들이 제거되면서 최후 한사람이 남음
function solution(n, k) {
  const princes = Array.from({ length: n }, (_, index) => index + 1);
  let index = 0;

  while (princes.length > 1) {
    index = (index + k - 1) % princes.length;
    princes.splice(index, 1);
  }

  return princes[0];
}

console.log(solution(8, 3));
