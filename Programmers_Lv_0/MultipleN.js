// 프로그래머스 Lv.0 n의 배수
// num 이 n 의 배수이면 1, 아니면 0 return
function solution(num, n) {
    return num % n === 0 ? 1 : 0;
}

console.log(solution(98, 2));
console.log(solution(34, 3));
