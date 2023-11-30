// 프로그래머스 Lv.0 배열 원소의 길이
// 배열의 i번째 원소의 length를 answer 배열에 넣기
function solution(strlist) {
    var answer = [];

    strlist.forEach((item,b,c) => {
         answer.push(item.length);
    })

    console.log(answer);

    return answer;
}

solution(["I", "Love", "Programmers."]);