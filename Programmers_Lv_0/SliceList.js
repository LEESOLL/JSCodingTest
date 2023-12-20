// 프로그래머스 Lv.0 n 번째 원소부터
function solution(num_list, n) {
    return num_list.slice(n-1);
}

console.log(solution([2, 1, 6], 3));
console.log(solution([5, 2, 1, 7, 5], 2));