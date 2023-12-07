// 프로그래머스 Lv.0 최댓값 만들기(1)
// 정수 배열 numbers 에서 원소 두개 곱해서 만들 수 있는 최댓값 return
// 조합의 수
// 최댓값이니까 정렬 후 0,1 원소 곱한거만 출력하면 됨
function solution(numbers) {
    var answer = 0;

    // let len = numbers.length;
    // let byNum = 0;

    // for(let i = 0; i < len - 1; i++) {
    //     for(let j = i + 1; j < len; j++) {
    //         byNum = numbers[i] * numbers[j];
    //         if(byNum > answer) answer = byNum;
    //     }
    // }

    numbers.sort((a,b)=>b-a);
    answer = numbers[0]*numbers[1];

    console.log(answer);

    return answer;
}

solution([1, 2, 3, 4, 5]);