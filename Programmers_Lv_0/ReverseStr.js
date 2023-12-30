// 프로그래머스 Lv.0 문자열 뒤집기
// my_string 에서 인덱스 s 부터 e 까지 뒤집은 문자열 return
function solution(my_string, s, e) {
  let answer =
    my_string.slice(0, s) +
    [...my_string.slice(s, e + 1)].reverse().join("") +
    my_string.slice(e + 1);

  return answer;
}

console.log(solution("Progra21Sremm3", 6, 12));
console.log(solution("Stanley1yelnatS", 4, 10));
console.log(solution("banaan", 4, 6));
