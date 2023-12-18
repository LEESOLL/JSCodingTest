// 프로그래머스 Lv.0 피자 나눠 먹기 (3)
// 피자조각수 slice가 주어질 때, n명이 최소 한조각 이상 먹으려면 몇판 시켜야하나
// slice * answer개가 n 보다 크거나 같으면 바로 리턴.
function solution(slice, n) {
    var answer = 1;

    while(true) {
        if(slice * answer >= n) {
            break;
        } else {
            answer++;
        }
    }

    console.log(answer);

    return answer;
}

solution(7, 10);
solution(4, 12);