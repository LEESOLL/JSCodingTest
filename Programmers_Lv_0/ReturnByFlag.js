// 프로그래머스 Lv.0 flag에 따라 다른 값 반환하기
// flag가 true 이면 a + b, false 이면 a - b return
function solution(a, b, flag) {
   return flag ? a + b : a - b;
}

console.log(solution(-4, 7, true));
console.log(solution(-4, 7, false));