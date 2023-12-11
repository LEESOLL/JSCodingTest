// 프로그래머스 Lv.0 삼각형의 완성조건(1)
// 삼각형 조건 : 가장 긴 변의 길이는 다른 두변 길이의 합보다 작아야 함.
// 삼각형 세 변의 길이가 담긴 배열 sides
// 삼각형 만들 수 있으면 1, 없으면 2 리턴
function solution(sides) {

    // 가장 긴 변을 구해야겠지
    // 내림차순 정리
    sides.sort((a, b) => b - a);

    if (parseInt(sides[0]) >= parseInt(sides[1] + sides[2])) {
        return 2;
    }
    else return 1;

}

solution([1, 2, 3]);
solution([3, 6, 2]);
solution([199, 72, 222]);
