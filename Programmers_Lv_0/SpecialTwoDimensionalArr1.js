// 프로그래머스 Lv.0 특별한 이차원 배열 1
// arr[i][j] 에서 i=j 이면 1, 아니면 0
// 문자열로 만든 다음에 문자열 split 한 배열을 answer에 넣어뿌까
function solution(n) {
  var answer = [];
  let tmpArr = [];
  for (let i = 0; i < n; i++) {
    tmpArr.push(0);
  }

  for (let i = 0; i < n; i++) {
    tmpArr[i] = 1;
    answer.push([...tmpArr]);
    tmpArr[i] = 0;
  }

  return answer;
}

console.log(solution(3));
console.log(solution(6));
console.log(solution(1));
