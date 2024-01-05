// 프로그래머스 Lv.0 배열의 길이를 2의 거듭제곱으로 만들기
function solution(arr) {
  var answer = [];

  for (let i = 0; i < 11; i++) {
    if (arr.length <= Math.pow(2, i)) {
      answer = [...arr].concat(new Array(Math.pow(2, i) - arr.length).fill(0));
      break;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(solution([58, 172, 746, 89]));
console.log(solution([]));
