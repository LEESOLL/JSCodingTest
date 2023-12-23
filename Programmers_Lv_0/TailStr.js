// 프로그래머스 Lv.0 꼬리 문자열
// 문자열을 순서대로 합친 문자열 -> 꼬리문자열
// 특정 문자 포함한 문자열 제외
// filter 후 join("") 사용
function solution(str_list, ex) {
  let filteredArr = str_list.filter((item) => {
    if (!item.includes(ex)) return item;
    else return "";
  });

  return filteredArr.join("");
}

console.log(solution(["abc", "def", "ghi"], "ef"));
console.log(solution(["abc", "bbc", "cbc"], "c"));
