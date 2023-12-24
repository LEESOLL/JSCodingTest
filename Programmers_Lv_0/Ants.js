// 프로그래머스 Lv.0 개미군단
// 개미군단 사냥감
// 장군개미 - 5, 병정개미 - 3, 일개미 - 1
// hp에 딱 맞는 최소한의 병력을 꾸리려면 몇마리 필요한지 return
function solution(hp) {
  var answer = 0;

  while (hp > 0) {
    if (hp >= 5) {
      answer += parseInt(hp / 5);
      hp = hp % 5;
    } else if (hp >= 3) {
      answer += parseInt(hp / 3);
      hp = hp % 3;
    } else {
      answer += hp;
      break;
    }
  }

  return answer;
}

console.log(solution(23));
console.log(solution(24));
console.log(solution(999));
