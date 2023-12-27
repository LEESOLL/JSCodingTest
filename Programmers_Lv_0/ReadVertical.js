// 프로그래머스 Lv.0 세로 읽기
// 한줄에 m글자씩 가로로 적었을 때
// 왼쪽부터 세로로 c 열에 적힌 글자들 문자열로 return
function solution(my_string, m, c) {
  var answer = "";

  for (let i = c - 1; i < my_string.length; i += m) {
    answer += my_string[i];
  }

  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
console.log(solution("programmers", 1, 1));
