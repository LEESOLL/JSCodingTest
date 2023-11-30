// 프로그래머스 Lv.0 중복된 숫자 개수
// 정수배열 array에 n이 몇개있는지
function solution(array, n) {
    var answer = 0;

    array.forEach((item) => {
        if(item === n) answer++;
    })

    console.log(answer);

    return answer;
}

solution([1, 1, 2, 3, 4, 5], 1);