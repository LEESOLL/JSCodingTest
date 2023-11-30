// 프로그래머스 Lv.0 머쓱이보다 키 큰 사람
// 머쓱이네 반 친구들 키 배열, 머쓱이 키
// 머쓱이보다 키 큰 사람 수 리턴
function solution(array, height) {
    var answer = 0;

    // array.forEach((item) => {
    //     if(item > height) answer++;
    // })

    for(let i = 0; i < array.length; i++) {
        if(array[i] > height) answer++;
    }

    console.log(answer);

    return answer;
}

solution([180, 120, 140], 190);