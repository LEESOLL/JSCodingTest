// 프로그래머스 Lv.0 제곱수 판별하기
// n 이 제곱수이면 1, 아니면 2 return
function solution(n) {
    if(Number.isInteger(Math.sqrt(n))) return 1;
    else return 2;
    // 3항 연산자 잘 이용해보기!
    // return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(144));
console.log(solution(976));