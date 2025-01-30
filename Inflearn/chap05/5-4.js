// 인프런 코테강의 5-4. 후위식 연산(postfix)
// 연산식을 만나면 앞에 두개의 숫자를 pop
// 결과를 다시 push
function solution(input) {
  const stack = [];

  const operators = {
    "+": (a, b) => b + a,
    "-": (a, b) => b - a,
    "*": (a, b) => b * a,
    "/": (a, b) => b / a,
  };

  for (const char of input) {
    if (operators[char]) {
      stack.push(operators[char](stack.pop(), stack.pop()));
    } else {
      stack.push(Number(char));
    }
  }

  return stack[0];
}

console.log(solution("352+*9-"));
console.log(solution("58+65*+32+-73*-5-323*++53+2+52*-+3+"));
