// 프로그래머스 Lv.0 문자열 묶기
// strArr의 원소들을 길이가 같은 문자열끼리 그룹핑 한 후 큰 그룹의 크기 리턴
function solution(strArr) {
  let arr = new Array(31).fill(0);

  strArr.forEach((item) => {
    arr[item.length] = arr[item.length] + 1;
  });

  return Math.max(...arr);
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
