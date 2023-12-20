// 프로그래머스 Lv.0 부분 문자열 이어 붙여 문자열 만들기
// 길이 같은 배열 my_strings, parts 매개변수로 주어짐
function solution(my_strings, parts) {
    var answer = '';

    for(let i = 0; i < my_strings.length; i++) {
        answer += my_strings[i].substring(parts[i][0], parts[i][1] + 1);
    }


    return answer;
}

console.log(solution(["progressive", "hamburger", "hammer", "ahocorasick"], [[0, 4], [1, 2], [3, 5], [7, 7]]));