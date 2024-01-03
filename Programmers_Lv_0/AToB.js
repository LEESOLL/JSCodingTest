// 프로그래머스 Lv.0 A로 B 만들기
// before 의 순서 바꿔서 after 만들 수 있으면 1, 아니면 0 리턴
function solution(before, after) {
  [...after].forEach((item) => {
    before = before.replace(item, "");
  });

  return before.length === 0 ? 1 : 0;
}

console.log(solution("olleh", "hello"));
console.log(solution("allpe", "apple"));
