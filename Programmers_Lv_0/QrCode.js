// 프로그래머스 Lv.0 qr code
// code의 인덱스를 q로 나누었을 때 나머지가 r 인 문자 합쳐서 return
function solution(q, r, code) {
  return [...code].filter((_, idx) => idx % q === r).join("");
}

console.log(solution(3, 1, "qjnwezgrpirldywt"));
console.log(solution(1, 0, "programmers"));
