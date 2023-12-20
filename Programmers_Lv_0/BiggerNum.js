// 프로그래머스 Lv.0 더 크게 합치기
// if 로 분기처리, a+b 가 b+a보다 크거나 같으면 a+b 출력
function solution(a, b) {
    return parseInt('' + a + b) >= parseInt('' + b + a) ? parseInt('' + a + b) : parseInt('' + b + a);    
}

console.log(solution(9, 91));
console.log(solution(89, 8));