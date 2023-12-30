// 프로그래머스 Lv.0 등차수열의 특정한 항만 더하기
function solution(a, d, included) {
  var answer = 0;

  let tmpNum = a;

  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      answer += tmpNum;
    }
    tmpNum += d;
  }

  return answer;
}

console.log(solution(3, 4, [true, false, false, true, true]));
console.log(solution(7, 1, [false, false, false, true, false, false, false]));
