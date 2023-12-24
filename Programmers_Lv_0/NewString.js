// 프로그래머스 Lv.0 글자 이어 붙여 문자열 만들기
// my_string 에서 index_list에 해당하는 원소들 이어붙인 문자열 리턴
function solution(my_string, index_list) {
  let answer = "";

  console.log(my_string[1]);
  index_list.filter((item) => {
    answer += my_string.charAt(item);
  });

  return answer;
}

console.log(
  solution("cvsgiorszzzmrpaqpe", [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7])
);
console.log(solution("zpiaz", [1, 2, 0, 0, 3]));
