// 프로그래머스 Lv.0 간단한 논리 연산
// x1, x2 연산결과와 x3, x4 연산결과가 true 여야만 true 리턴
// 아래화살표 연산결과는 둘 다 f 일 때만 f
function solution(x1, x2, x3, x4) {
  //   let calc1 = (a, b) => (!a && !b ? false : true);
  //   let calc2 = (a, b) => (a && b ? true : false);

  //   return calc2(calc1(x1, x2), calc1(x3, x4));
  return (x1 || x2) && (x3 || x4);
}

console.log(solution(false, true, true, true));
console.log(solution(true, false, false, false));
