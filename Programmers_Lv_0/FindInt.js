// 프로그래머스 Lv.0 정수 찾기
// num_list 에 n 이 있으면 1, 없으면 0 return
function solution(num_list, n) {
    return num_list.includes(n) ? 1 : 0; 
}

console.log(solution([1, 2, 3, 4, 5], 3));
console.log(solution([15, 98, 23, 2, 15], 20));