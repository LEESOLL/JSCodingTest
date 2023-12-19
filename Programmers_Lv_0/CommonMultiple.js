// 프로그래머스 Lv.0 공배수
// number가 n과 m의 공배수이면 1, 아니면 0 return
function solution(number, n, m) {
    return number % n === 0 && number % m === 0 ? 1 : 0;
}

console.log(solution(60, 2, 3));
console.log(solution(55, 10, 5));