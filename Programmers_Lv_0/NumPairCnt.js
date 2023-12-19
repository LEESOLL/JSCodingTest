// 프로그래머스 Lv.0 순서쌍의 개수
// 두 숫자의 곱이 n 인 자연수 순서쌍의 개수 return
// 약수의 갯수와 같다. 
// 1. 반까지만 돌기
// 2. 제곱근 이용한게 제일 빠름

function solution(n) {
    // 1.
    // var answer = 1; // 자기자신은 미리 더해줌

    // let len = Math.floor(n/2);
    
    // for(let i = 1; i <= len; i++) {
    //     if(n % i === 0) answer++;
    // }

    // 2.
    var answer = 0;

    for(let i = 1; i < Math.sqrt(n); i++) {
        if (n % i === 0) answer += 2;
    }

    return Number.isInteger(Math.sqrt(n))? ++answer: answer;
}

solution(20);
solution(100);