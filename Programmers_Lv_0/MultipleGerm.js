// 프로그래머스 Lv.0 세균 증식
// 1시간에 두배만큼 증식
// 처음 세균 n 마리, 경과 시간 t
// t시간 후 세균 수 return
function solution(n, t) {
    return n * Math.pow(2, t);
}

console.log(solution(2, 10));
console.log(solution(7, 15));