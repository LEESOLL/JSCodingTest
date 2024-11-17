// 인프런 코테강의 9. 숫자만 추출
function solution(input) {
  // 숫자만 추출, 그 순서대로 자연수 만듦
  let extractedNum = input.replace(/[^0-9]/g, "");

  return parseInt(extractedNum);
}

console.log(solution("g0en2T0s8eSoft"));
console.log(solution("Akdj0Gk1dgdgdAGSGAG3DGGA45GAGADGDGdjADG2SDGkdj0f"));
