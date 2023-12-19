// 프로그래머스 Lv.0  첫 번째로 나오는 음수
// 정수 리스트 num_list에서 첫번째로 나오는 음수 인덱스 return
function solution(num_list) {
    var answer = -1;

    let i = 0;

    while(i < num_list.length) {
        if(num_list[i] < 0) {
            answer = i;
            break;
        } else {
            i++;
        }
    }

    return answer;
}

console.log(solution([12, 4, 15, 46, 38, -2, 15]));
console.log(solution([13, 22, 53, 24, 15, 6]));