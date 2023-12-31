// 프로그래머스 Lv.0 글자 지우기
// my_string 에서 indices 원소에 해당하는 글자 지우기
function solution(my_string, indices) {
  let answer = [...my_string]
    .filter((item, index) => {
      if (!indices.includes(index)) {
        return item;
      }
    })
    .join("");
  return answer;
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3]));
