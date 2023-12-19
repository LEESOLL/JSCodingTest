// 프로그래머스 Lv.0 옷가게 할인 받기
// 10 만원 이상 -> 5% 할인
// 30만원 이상 -> 10% 할인
// 50만원 이상 -> 20% 할인

function solution(price) {
    var answer = price;

    if (price >= 500000) {
        answer = price * 0.8;
    } else if (price >= 300000) {
        answer = price * 0.9;
    } else if (price >= 100000) {
        answer = price * 0.95;
    }

    return parseInt(answer);
}

solution(10);
