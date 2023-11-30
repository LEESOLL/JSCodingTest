// 프로그래머스 Lv.0 아이스 아메리카노
function solution(money) {
    // 돈이 매개변수로 주어짐
    // 최대로 마실 수 있는 아메리카노 수
    // 남는 돈
    // 몫 -> 아메리카노 수
    // 나머지 -> 남는 돈
    var answer = [];

    answer.push(parseInt(money / 5500));
    answer.push(money % 5500);

    return answer;
}

solution(15000);