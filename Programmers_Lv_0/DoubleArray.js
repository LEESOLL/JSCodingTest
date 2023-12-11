// 프로그래머스 Lv.0 배열 두 배 만들기
// 정수 배열 numbers 의 각 원소 두배한 값 가지는 배열 return
function solution(numbers) {
    return numbers.map((item) => item * 2);
}

solution([1, 2, 3, 4, 5]);
solution([1, 2, 100, -99, 1, 2, 3]);