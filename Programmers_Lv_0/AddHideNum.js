// 프로그래머스 Lv.0 숨어있는 숫자의 덧셈 (1)
// my_string 안의 모든 자연수의 합 return
// 1. String 자체로 풀어보기
// 2. 배열로 풀어보기 (시간, 공간 복잡도 비교)
// 2 번 배열로 쪼개서 forEach 구문 쓰는게 시간복잡도에서 좀 더 우세함
// 공간복잡도는 비슷
function solution(my_string) {
    var answer = 0;

    // 1.
    // for(let i = 0; i < my_string.length; i++) {
    //     if(Number.isInteger(parseInt(my_string.charAt(i)))) {
    //         answer += parseInt(my_string.charAt(i));
    //     };
    // }

    // 2.
    let tmpArr = my_string.split('');
    tmpArr.forEach((item) => {
        if(Number.isInteger(parseInt(item))) {
            answer += parseInt(item);
        }
    })


    return answer;
}

console.log(solution("aAb1B2cC34oOp"));
console.log(solution("1a2b3c4d123"));