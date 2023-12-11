// 프로그래머스 Lv.0 배열 자르기
function solution(numbers, num1, num2) {
    // var answer = [];

    // for(let i = num1; i <= num2; i++) {
    //     answer.push(numbers[i]);
    // }

    // console.log(numbers.slice(num1, num2 + 1));

    // console.log(answer);

    return numbers.slice(num1, num2 + 1);
}

solution([1, 2, 3, 4, 5], 1, 3);
solution([1, 3, 5], 1, 2);

