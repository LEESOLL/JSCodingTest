// 프로그래머스 Lv.0 점의 위치 구하기
// 점이 주어졌을 때, 몇사분면 위의 점인지 출력하기
function solution(dot) {
    // var answer = 0;

    // if(dot[0] > 0) {
    //     answer = dot[1] > 0 ? 1 : 4;
    // } else {
    //     answer = dot[1] > 0 ? 2 : 3;
    // }

    // console.log(answer);

    // return answer;

    //전부 다 3항 연산자로 바꿔보기 => 이게 훨씬 빠르네 !!
    return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : (dot[1] > 0 ? 2 : 3);
}

solution([2, 4]);
solution([-7, 9]);