// 프로그래머스 Lv.0 접미사인지 확인하기
function solution(my_string, is_suffix) {
  return my_string.slice(my_string.length - is_suffix.length) == is_suffix
    ? 1
    : 0;
}

console.log(solution("banana", "ana"));
console.log(solution("banana", "nan"));
console.log(solution("banana", "wxyz"));
console.log(solution("banana", "abanana"));
