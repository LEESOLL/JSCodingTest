// 프로그래머스 Lv.0 중앙값 구하기
// 배열이 주어졌을 때 배열 순서대로 정리한 값 중 중앙값 구하기
// 우선 정렬을 해야겠지
function solution(array) {
    var answer = 0;
    let center = Math.floor(array.length / 2);

    array.sort((a, b) => a - b);

    answer = array[center];

    return answer;
}

solution([1, 2, 7, 10, 11]);
solution([9, -1, 0]);