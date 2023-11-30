// 프로그래머스 Lv.0 양꼬치
// 10인분 -> 음료수 하나 서비스
// 양꼬치: 12000, 음료수: 2000
// 양꼬치 n개, 음료수 k개 얼마내야하는지
// k - n/10 : 돈 내야 할 음료수 갯수 
function solution(n, k) {
    var answer = 0;

    let lambMoney = n * 12000;
    let drinkMoney = (k - parseInt(n/10)) * 2000;

    answer = lambMoney + drinkMoney;
    
    console.log(answer);
    console.log(drinkMoney);
 
    return answer;
}

solution(64, 6);