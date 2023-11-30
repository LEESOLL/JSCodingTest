// 프로그래머스 Lv.0 피자 나눠 먹기(1)
// 피자 7조각 한조각 이상 먹기위해 필요한 피자 수
// 나눠먹을 사람 수 n
// 풀이1. 나머지가 0보다 크면 몫 + 1
// 풀이2. 나누고 소수점 아래 올림하기

function solution(n) {
    var answer = Math.ceil(n/7);

    // let remainder = n % 7;

    // if (remainder > 0) {
    //     answer += 1;
    // } 

    console.log(answer);

    return answer;
}

solution(7);
solution(1);
solution(15);
