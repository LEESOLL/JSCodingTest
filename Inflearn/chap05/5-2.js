// 인프런 코테강의 5-2. 괄호문자제거
// 소괄호 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력
function solution(input) {
  //   ')'를 만나면 '('가 나올 때 까지 Pop

  let stack = [];

  for (const char of input) {
    if (char !== ")") {
      stack.push(char);
    } else {
      while (true) {
        if (stack.pop() === "(") break;
      }
    }
  }

  return stack.join("");
}

console.log(solution("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
console.log(solution("(AGKD)KDK(TKDM(KD))"));
console.log(solution("(AGKD)KDK(TKDM(KD))(ADKF(DK)DKF)DKF"));
console.log(solution("(AGKD)KDK(TKDM(KD))(ADKF(DK)DKF)DKF(dkf)dkf(d(D)dd)"));
console.log(
  solution("(AGKD)KDK(TKDM(KD))(ADKF(DK)DKF)DKF(dkf)dkf(d(D)dd)(DFS(d))dD")
);
console.log(
  solution(
    "(AGKD)KDK(TKDM(KD))(ADKF(DK)DKF)DKF(dkf)dkf(d(D)dd)(DFS(d))dD(dk)DDD"
  )
);
