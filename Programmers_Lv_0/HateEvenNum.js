// 프로그래머스 Lv.0 짝수는 싫어요
// n 이하의 홀수가 오름차순으로 담긴 배열 return
function solution(n) {
    var answer = [];

    for(let i = 1; i <= n; i += 2) {
        answer.push(i);
    }

    return answer;
}

console.log(solution(10));
console.log(solution(15));

