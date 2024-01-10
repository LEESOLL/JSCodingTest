// 프로그래머스 Lv.0 조건에 맞게 수열 변환하기2
// 50보다 크거나 같은 짝수 -> %2 해서 50보다 작은 짝수로 만들기
// 50보다 작은 홀수 -> *2 +1 해서 50보다 큰 홀수로 만들기
// 모든 수가 50보다 작은 짝수이거나 50보다 큰 홀수가 되면 됨
// 원소 순차적으로 돌면서 계산 횟수만 담은 배열 담고, 최대값 리턴

function solution(arr) {
  let cntArr = [];

  const calc1 = (x) => x / 2;
  const calc2 = (x) => x * 2 + 1;

  arr.forEach((item) => {
    let cnt = 0;
    if (item >= 50 && item % 2 === 0) {
      while (item > 50) {
        item = calc1(item);
        cnt++;
      }
    } else if (item < 50 && item % 2 === 1) {
      while (item < 50) {
        item = calc2(item);
        cnt++;
      }
    }
    cntArr.push(cnt);
  });

  return cntArr.sort((a, b) => b - a)[0];
}

console.log(solution([1, 2, 3, 100, 99, 98]));
