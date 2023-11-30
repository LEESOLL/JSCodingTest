// 프로그래머스 Lv.0 배열 뒤집기
function solution(num_list) {

    // reverse 함수 말고 for문 써서 뒤집어보기
    for(let i = 0; i < num_list.length/2; i++){
        let tmp = num_list[i];
        num_list[i] = num_list[num_list.length - i - 1];
        num_list[num_list.length - i - 1] = tmp;
    }

    return num_list;
};

solution([1,2,3,4,5]);