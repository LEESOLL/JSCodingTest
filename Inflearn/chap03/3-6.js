// 인프런 코테강의 3-6. 최대 길이 연속 부분 수열
// 0과 1로 구성된 수열
// 수열에서 최대 k번을 0을 1로 변경할 수 있음
// k번 변경을 통해 1로만 구성된 수열의 최대 길이
function solution(k, input) {
  let answer = 0;

  //0일 때 k가 0보다 크면 0을 1로 바꾸고 Cnt++, 0일 때 k 가 0이면 cnt Max랑 비교 후 저장

  let rp = 0,
    cnt = 0;
  let tmpK = k;

  for (let lp = 0; lp < input.length; lp++) {
    rp = lp;
    while (rp < input.length) {
      if (input[rp++] === 1) {
        cnt++;
      } else {
        if (tmpK > 0) {
          cnt++;
          tmpK--;
        } else {
          break;
        }
      }
    }

    answer = Math.max(answer, cnt);
    cnt = 0;
    tmpK = k;
  }

  return answer;
}
