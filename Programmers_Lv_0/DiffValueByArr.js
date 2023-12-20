// 프로그래머스 Lv.0 배열의 길이에 따라 다른 연산하기
// 정수배열 arr, 정수 n
// arr 길이 홀수 -> arr 짝수 인덱스에 n 더한 배열 리턴
// arr 길이 짝수 -> arr 홀수 인덱스에 n 더한 배열 리턴
function solution(arr, n) {
    var answer = [...arr];
    let arrLen = arr.length;
    
    if(arrLen % 2 === 1) {
        for (let i = 0; i < arrLen; i += 2) {
            answer[i] += n;
        }
    } else {
        for (let i = 1; i < arrLen; i += 2) {
            answer[i] += n;
        }
    }

    return answer;
}

console.log(solution([49, 12, 100, 276, 33], 27));
console.log(solution([444, 555, 666, 777], 100));