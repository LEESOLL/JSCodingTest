// 프로그래머스 Lv.0 배열의 유사도
// 두 배열의 같은 원소의 개수 출력
// 원소는 알파벳 소문자로만 이뤄짐
// 배열 각각은 중복된 원소를 갖지 않음
// 1. 이중포문 돌면서 하나씩 다 비교
// 2. filter 사용해서 구현
function solution(s1, s2) {
    var answer = 0;
    // 1.
    // let s1Len = s1.length;
    // let s2Len = s2.length;

    // for(let i = 0; i < s1Len; i++) {
    //     for(let j = 0; j < s2Len; j++) {
    //         if(s1[i] === s2[j]) answer++;
    //     }
    // }

    // 2.
    answer = s1.filter((item) => s2.includes(item)).length;

    console.log(answer);

    return answer;
}

solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]);
solution(["n", "omg"], ["m", "dot"]);