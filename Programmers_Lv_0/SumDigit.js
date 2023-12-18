// 프로그래머스 Lv.0 자릿수 더하기
// 1. 10으로 나눈 나머지 더해나가기
// JS 는 형을 특정하지 않기 때문에, int 형 변수는 꼭 parseInt 해줘야한다!
// 2. 문자열로 쪼개서 해보기 (숫자형 String으로 만드는 JS 문법 찾아보기)
// => Number.toString() 후 reduce 사용
function solution(n) {
    var answer = 0;

    // 1.
    // while (n > 0) {
    //     answer += n % 10;
    //     n = Number.parseInt(n / 10);
    // }

    // 2.
    let tmpStrArr = n.toString().split('');

    answer = tmpStrArr.reduce((acc, cur) => parseInt(acc) + parseInt(cur), parseInt(0));
    
    console.log(answer);
    return answer;

}

solution(1234);
solution(930211);