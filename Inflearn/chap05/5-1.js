// 인프런 코테강의 5-1. 올바른 괄호
// 올바른 괄호이면 "YES", 아니면 "NO" 출력

// stack 사용
function solution(input) {
  let stack = [];

  for (const char of input) {
    if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }

  return stack.length === 0 ? "YES" : "NO";
}

console.log(solution("(())()"));
console.log(solution("((()())())))"));
console.log(solution(")(())("));
console.log(solution("((())())())("));
console.log(solution("(((())((((())((((())))))))))"));
console.log(solution(""));
