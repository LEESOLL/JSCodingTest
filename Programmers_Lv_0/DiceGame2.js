// 프로그래머스 Lv.0 주사위 게임 2
// a, b, c 다 다르면 a + b + c
// a, b, c 중 두개 같고 나머지 하나 다르면  (a + b + c) × (a2 + b2 + c2 )
// a, b, c 다 같으면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )
function solution(a, b, c) {
  var answer = 0;
  if (a === b && b === c) {
    answer =
      (a + b + c) *
      (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2)) *
      (Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3));
  } else if (a !== b && b !== c && a !== c) {
    answer = a + b + c;
  } else {
    answer = (a + b + c) * (Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2));
  }

  return answer;
}

console.log(solution(2, 6, 1));
console.log(solution(5, 3, 3));
console.log(solution(4, 4, 4));
