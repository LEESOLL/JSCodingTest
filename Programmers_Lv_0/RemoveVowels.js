// 프로그래머스 Lv.0 모음 제거
// my_string 에서 a,e,i,o,u 제거한 문자열 return
// my_string 은 소문자와 공백으로 이루어짐
// 1. string.replaceAll('모음', '') 를 이어서 쓰는 방법
// 2. for 문을 돌면서 모음이 아니면 answer에 문자를 더하는 방법 (JS의 charAt(i)같은 메서드 있나 보기)
function solution(my_string) {
    var answer = '';

    // answer = my_string.replaceAll('a', '').replaceAll('e', '').replaceAll('i', '').replaceAll('o', '').replaceAll('u', '');

    for(let i = 0; i < my_string.length; i++) {
        if (my_string.charAt(i) === 'a') continue;
        else if (my_string.charAt(i) === 'e') continue;
        else if (my_string.charAt(i) === 'i') continue;
        else if (my_string.charAt(i) === 'o') continue;
        else if (my_string.charAt(i) === 'u') continue;
        else {
            answer += my_string.charAt(i);
        }
    }

    console.log(answer);

    return answer;
}

solution("nice to meet you"	);