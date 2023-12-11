// 프로그래머스 Lv.0 짝수 홀수 개수
// num_list의 짝수와 홀수 개수를 담은 배열 return
function solution(num_list) {
    var answer = [];

    let even = 0;
    let odd = 0;

    num_list.forEach((item) => {
        if(item % 2 === 0) {
            even++;
        } else odd++;
    })

    answer.push(even, odd);

    console.log(answer);

    return answer;
}

solution([1, 2, 3, 4, 5]);
solution([1, 3, 5, 7]);
