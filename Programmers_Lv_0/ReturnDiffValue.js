// 프로그래머스 Lv.0 홀짝에 따라 다른 값 반환하기
// n이 홀수면 n이하의 홀수 더한 값 return
// n이 짝수면 n이하의 짝수 제곱의 합 return
function solution(n) {
    let answer = 0;

    if (n % 2 === 1) {
        for(let i = 1; i <= n; i += 2) {
            answer += i;
        }
    } else {
        for(let i = 2; i <= n; i += 2) {
            answer += Math.pow(i, 2);
        }
    }

    return answer;
}

console.log(solution(7));
console.log(solution(10));
